import React from 'react';
import logo from './logo.svg';
import logoSpotify from './logo-spotify.svg';
import './App.scss';
import SpotifyWebApi from 'spotify-web-api-js';

// Create the user authorisation link
const Authorise = (props) => {
  const endpoint = props.endpoint;
  const client_id = props.client_id;
  const redirect_uri = props.redirect_uri;
  const scope = props.scope;

  return (
    <a href={`${endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join('%20')}&response_type=token`} className="Authorise-link">Spotify authorisation</a>
  );
}

// Return the access key hash if authorised
const Token = () => {
  if (window.location.hash) {
    const access_token = window.location.hash
      .split('&')[0]
      .split('=')[1];
    return {result:true, value:access_token};
  } 
  else {
    return {result:false, value:"Access denied"};
  }
}
console.log("Token: ",Token());

// Initialise the Spotify Web API library
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(Token().value);

console.log(spotifyApi.getMyCurrentPlaybackState());

class Player extends React.Component {
  constructor() {
    super();
    const token = Token().result;
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  // componentDidMount () {
  //     const script = document.createElement("script");
  //     script.src = "https://sdk.scdn.co/spotify-player.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  // }

  getNowPlaying(){
      spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
          console.log("Response: ", response)
          this.setState({
            nowPlaying: { 
                name: response.item.name, 
                albumArt: response.item.album.images[0].url
            }
          });
        })
  }

  render() {
    return (
      <div className="player">
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoSpotify} className="spotify-logo" alt="spotify-logo" />
      </header>
      <main>
        <Authorise
          endpoint="https://accounts.spotify.com/authorize" 
          client_id="81cee7973b1a4951a4af313823b614df" 
          redirect_uri="http:%2F%2Flocalhost%3A3000" 
          scope={["user-read-private","user-read-email", "user-read-playback-state"]}
        />
        <Player />
      </main>
    </div>
  );
}

export default App;
