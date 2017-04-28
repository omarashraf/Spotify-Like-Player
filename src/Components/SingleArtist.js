import React from 'react';
import axios from 'axios';

import { API_URL, FixedMenu } from "../App";

import AlbumList from "./AlbumList";
import TrackList from "./TrackList";
import TopTracks from "./TopTracks";

export default class SingleArtist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: {},
			artist_images: [],
			albums: [],
			top_tracks: []
		}
	}
	
	componentDidMount() {
		const id = this.props.match.params.id;
		axios.get(`${API_URL}/artists/${id}`).then((response) => {
			console.log("Artist -- ");
			console.log(response);
			this.setState({ artist: response.data, artist_images: response.data.images });
		});

		axios.get(`${API_URL}/artists/${id}/albums`).then((response) => {
			this.setState({ albums: response.data.items });
		});

		axios.get(`${API_URL}/artists/${id}/top-tracks?country=SE`).then((response) => {
			console.log("Top Tracks -- ");
			console.log(response);
			this.setState({ top_tracks: response.data.tracks });
		});
	}

	render() {
		let x = '', y = '';
		if (this.state.artist_images[0] !== undefined) {
			x = this.state.artist_images[0].url;
			y = this.state.artist.followers.total;
		}
		return(
			<div>
				<FixedMenu />
				<div className="home__main-container">
					<div className="artist__info">
						<img className="artist__cover-img" src={x} />
						<div className="colored-layer"></div>
						<div className="artist__detailed-info">
							<h6 className="artist-followers">{y} Followers</h6>
							<h1 className="artist__name">{ this.state.artist.name }</h1>
							<a className="spotify-button">FOLLOW</a>
							<a className="spotify-button spotify--play-all-button">PLAY ALL</a>
						</div>
						<div className="artist__top-tracks">
							<div className="row">
								<div className="small-10 columns">
									<h1 className="artist__top-tracks-title">Top Tracks</h1>
									<TrackList tracks={this.state.top_tracks} />
								</div>
							</div>
						</div>
					</div>
					<div className="artist__albums">
						<h1 className="home__top-artists related-albums--title">Albums</h1>
						<AlbumList albums={this.state.albums} />
					</div>
				</div>
			</div>
		);
	}
}