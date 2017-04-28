import React from 'react';
import axios from 'axios';

import AlbumList from './AlbumList';

import { API_URL, FixedMenu } from "../App";

export default class Albums extends React.Component {

	constructor() {
		super();
		this.state = {
			albums: []
		}
		this.searchAlbums = this.searchAlbums.bind(this);
	}

	searchAlbums(event) {
		event.preventDefault();
		axios.get(`${API_URL}/search?type=album&q=${this.refs.albums_keyword.value}`).then((response)=> {
			this.setState({ albums: response.data.albums.items });
		});
	}

	render() {
		return(
			<div className="main">
				<FixedMenu />
				<div className="home__main-container">
					<div className="row">
						<div className="small-12 small-centered columns">
							<h1 className="search-titles">Search for albums</h1>
							<form onSubmit={this.searchAlbums}>
								<div className="spotify-input-container">
									<input className="spotify-input" ref="albums_keyword" type="text" placeholder="Search..."/>
								</div>
							</form>
							<AlbumList albums={this.state.albums} />
						</div>
					</div>
				</div>
				<div className="clr"></div>
			</div>
		)
	}
}