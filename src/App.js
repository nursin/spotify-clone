import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login.js';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      // returns a promise
      spotify.getMe().then(user => {
        console.log('user: ', user);
      });
    }

    console.log('I HAVE A TOKEN>>> ', token);
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
      {/* Spotify Logo */}
      {/* Login with spotify button */}


    </div>
  );
}

export default App;
