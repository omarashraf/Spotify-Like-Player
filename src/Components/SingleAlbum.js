import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { API_URL, FixedMenu } from "../App";
import TrackList from './TrackList';
import AlbumDetails from './AlbumDetails';

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

	componentDidMount() {
		const id = this.props.match.params.id;
		axios.get(`${API_URL}/albums/${id}/tracks`).then((response) => {
			this.setState({ tracks: response.data.items });
		});

		axios.get(`${API_URL}/albums/${id}`).then((response)=> {
			this.setState({ album: response.data, images: response.data.images,
			 				artists: response.data.artists });
		});
	}

	render() {
		let x = '', y = '', z='';
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
			    <div className="home__main-container">
			    	<div className="row">
			    		<div className="small-12 columns">
			    			<div className="row">
			    				<div className="small-4 columns">
			    					<img src={x} />
			    					<h3>{this.state.album.name}</h3>
			    					<h5>{y}</h5>
			    					<Link to={`/artist/${z}`}>Artist Profile</Link>
			    				</div>
			    				<div className="small-8 columns">
									<TrackList tracks={this.state.tracks} />
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			</div>
		);
	}
}