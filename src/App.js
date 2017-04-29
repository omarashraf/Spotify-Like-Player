import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

import Home from './Components/Home';
import Artists from './Components/Artists';
import Albums from './Components/Albums';
import SingleArtist from './Components/SingleArtist';
import SingleAlbum from './Components/SingleAlbum';
import Player from './Components/Player';
import $ from 'jquery';

import './index.css';
import './css/foundation.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';


export const API_URL = "https://api.spotify.com/v1";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      currentTrackI: null
    }
    this.playTrack = this.playTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.previousTrack = this.previousTrack.bind(this);
  }

  playTrack(tracks, index) {
    console.log("Tracks in playTrack");
    console.log(tracks);
    console.log("Index in playTrack");
    console.log(index);
    this.setState({ queue: tracks, currentTrackI: index });
  }

  nextTrack() {
    if (this.state.currentTrackI !== this.state.queue.length - 1) {
      console.log("next");
      this.setState({ currentTrackI: this.state.currentTrackI + 1 })
    }
    else {
      this.setState({ currentTrackI: 0 }) 
    }
  }

  previousTrack() {
    if (this.state.currentTrackI !== 0) {
      console.log("previous");
      this.setState({ currentTrackI: this.state.currentTrackI - 1 })
    }
    else {
      this.setState({ currentTrackI: this.state.queue.length - 1 }) 
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={Artists} />
          <Route path="/albums" component={Albums} />
          <Route path="/artist/:id" render={(routeParams) => 
                      <SingleArtist {...routeParams} playTrack={this.playTrack} /> } />
          <Route path="/album/:id" render={(routeParams) => 
                      <SingleAlbum {...routeParams} playTrack={this.playTrack} />} />
          <Player nextTrack={this.nextTrack} previousTrack={this.previousTrack} 
                      current={this.state.queue[this.state.currentTrackI]} />
        </div>
      </BrowserRouter>
    );
  }
}

export function Menu(props) {
  return(
    <ul className="menu-links">
      <li className="menu-link">
        <NavLink className="menu-link--inner menu-link-home" activeClassName="active--link" exact to="/">Home</NavLink> 
      </li>
      <li className="menu-link">
        <NavLink className="menu-link--inner menu-link-artists" activeClassName="active--link" to="/artists">Artists</NavLink> 
      </li>
      <li className="menu-link">
        <NavLink className="menu-link--inner menu-link-albums" activeClassName="active--link" to="/albums">Albums</NavLink>
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
