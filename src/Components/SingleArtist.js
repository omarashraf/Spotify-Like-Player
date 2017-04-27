import React from 'react';
import axios from 'axios';

import { API_URL, FixedMenu } from "../App";

import AlbumList from "./AlbumList";

export default class SingleArtist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: {},
			albums: []
		}
	}
	
	componentDidMount() {
		const id = this.props.match.params.id;
		axios.get(`${API_URL}/artists/${id}`).then((response) => {
			this.setState({ artist: response.data });
		});

		axios.get(`${API_URL}/artists/${id}/albums`).then((response) => {
			this.setState({ albums: response.data.items });
		});

		axios.get(`${API_URL}/artists/${id}/top-tracks?country=SE`).then((response) => {
			// console.log(response);
		});
	}

	render() {
		return(
			<div>
				<FixedMenu />
				<div className="home__main-container">
					<div className="artist__top-tracks">
					</div>
					<div className="artist__albums">
						<h1 className="home__top-artists">Albums</h1>
						<AlbumList albums={this.state.albums} />
					</div>
				</div>
			</div>
		);
	}
}