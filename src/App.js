import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Artists from './Components/Artists';
import Albums from './Components/Albums';
import SingleArtist from './Components/SingleArtist';
import SingleAlbum from './Components/SingleAlbum';

import './index.css';
import './css/foundation.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

export const API_URL = "https://api.spotify.com/v1";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={Artists} />
          <Route path="/albums" component={Albums} />
          <Route path="/artist/:id" component={SingleArtist} />
          <Route path="/album/:id" component={SingleAlbum} />
        </div>
      </BrowserRouter>
    );
  }
}

export function Menu(props) {
  return(
    <ul className="menu-links">
      <li className="menu-link">
        <Link className="menu-link--inner" to="/">Home</Link> 
      </li>
      <li className="menu-link">
        <Link className="menu-link--inner" to="/artists">Artists</Link> 
      </li>
      <li className="menu-link">
        <Link className="menu-link--inner" to="/albums">Albums</Link>
      </li>
    </ul>
  );
}

export function FixedMenu(props) {
  return(
    <div className="home__menu">
      <img className="spotify-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/500px-Spotify_logo_with_text.svg.png" />
      <Menu />
      <div className="home__user">
        <span className="user-info"><i className="fa fa-user-o"></i> Omar Ashraf</span>
      </div>
    </div>
  );
}



export default App;
