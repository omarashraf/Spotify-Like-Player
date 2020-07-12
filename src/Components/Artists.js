import React from 'react';
import axios from 'axios';

import { API_URL, FixedMenu } from "../App";
import { getToken } from '../Utils/Api';
import ArtistList from './ArtistList';


export default class Artists extends React.Component {

	constructor() {
		super();
		this.state = {
			artists: []
		}
		this.searchArtists = this.searchArtists.bind(this);
	}

	async searchArtists(event) {
		event.preventDefault();		
		const token = await getToken();
		axios.get(`${API_URL}/search?type=artist&q=${this.refs.artists_keyword.value}`, { headers: { 'Authorization': 'Bearer ' + token } }).then((response)=> {
			this.setState({ artists: response.data.artists.items });
		}).catch(err => {
			console.log(err.response);
		});
	}

	render() {
		return(
			<div className="main">
				<FixedMenu />
				<div className="home__main-container">
					<div className="row">
						<div className="small-12 small-centered columns">
							<h1 className="search-titles">Search for artists</h1>
							<form onSubmit={this.searchArtists}>
								<div className="spotify-input-container">
									<input ref="artists_keyword" type="text" placeholder="Search..."/>
								</div>
							</form>
							<ArtistList artists={this.state.artists} />
						</div>
					</div>
				</div>
				<div className="clr"></div>
			</div>
		);
	}
}