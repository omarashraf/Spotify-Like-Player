import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { API_URL, FixedMenu } from "../App";
import TrackList from './TrackList';
import { getToken } from '../Utils/Api';

export default class SingleAlbum extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			album: {},
			images: [],
			artists: [],
			tracks: []
		}
	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		const token = await getToken();
		axios.get(`${API_URL}/albums/${id}/tracks`, { headers: { 'Authorization': 'Bearer ' + token } }).then((response) => {
			this.setState({ tracks: response.data.items });
		});

		axios.get(`${API_URL}/albums/${id}`, { headers: { 'Authorization': 'Bearer ' + token } }).then((response)=> {
			this.setState({ album: response.data, images: response.data.images,
			 				artists: response.data.artists });
		});
	}

	render() {
		let x = 'http://dalelyles.com/musicmp3s/no_cover.jpg', y = '', z='';
		if (this.state.images[0] !== undefined) {
			x = this.state.images[0].url;
		}
		if (this.state.artists[0] !== undefined) {
			y = this.state.artists[0].name;
			z = this.state.artists[0].id;
		}
		return(																																																							
			<div>
			    <FixedMenu />
			    <div className="home__main-container album__main--container">
			    	<div className="row">
			    		<div className="small-12 columns">
			    			<div className="row">
			    				<div className="small-4 columns">
			    					<div className="row">
				    					<div className="small-10 small-centered columns">
				    						<div className="album-info-img">
						    					<img src={x} />
						    					<h3 className="album-info--title">{this.state.album.name}</h3>
						    					<h5 className="album-info--artist">{y}</h5>
						    					<h6 className="album-tracks-count">{this.state.tracks.length} tracks</h6>
						    					<div className="artist--button">
						    						<Link className="spotify-button" to={`/artist/${z}`}>Artist Profile</Link>
						    					</div>
					    					</div>
				    					</div>
			    					</div>
			    				</div>
			    				<div className="small-8 columns">
			    					<div className="album-tracks-list">
										<TrackList playTrack={this.props.playTrack} 
										tracks={this.state.tracks}
										currentTrack={this.props.currentTrack} />
									</div>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			</div>
		);
	}
}