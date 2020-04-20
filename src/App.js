import React from 'react';
import logo from './logo.svg';
import './App.css';

function Auth(props) {
  const endpoint = this.props.endpoint;
  const client_id = this.props.client_id;
  const redirect_uri = this.props.redirect_uri;
  const scope = this.props.scope;

  return (
    <a href="#"></a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <a
        className="auth-login"
        href="https://accounts.spotify.com/authorize?client_id=81cee7973b1a4951a4af313823b614df&redirect_uri=http:%2F%2Flocalhost%3A3000&scope=user-read-private%20user-read-email&response_type=token&state=123"
        >
          Spotify authorisation
        </a>
      </main>
    </div>
  );
}

export default App;
