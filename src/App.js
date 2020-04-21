import React from 'react';
import logo from './logo.svg';
import logoSpotify from './logo-spotify.svg';
import './App.scss';

function Authorise(props) {
  const endpoint = props.endpoint;
  const client_id = props.client_id;
  const redirect_uri = props.redirect_uri;
  const scope = props.scope;

  return (
    <a href={`${endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join('%20')}&response_type=token`} className="Authorise-link">Spotify authorisation</a>
  );
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
          scope={["user-read-private","user-read-email"]}
        />
      </main>
    </div>
  );
}

export default App;
