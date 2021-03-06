import React from 'react';
import axios from 'axios';


import { API_URL, FixedMenu } from "../App";
import { getToken } from '../Utils/Api';
import ArtistList from './ArtistList';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			artists: []
		}
	}

	async componentDidMount() {
		const token = await getToken();
		axios.get(`${API_URL}/search?type=artist&q=q`, { headers: { 'Authorization': 'Bearer ' + token } }).then((response)=> {
			this.setState({ artists: response.data.artists.items });
		});
	}

	render() {
		return(
			<div>
				<FixedMenu />
				<div className="home__main-container">
					<div className="row">
						<div className="small-12 small-centered columns">
							<h1 className="home__top-artists">Top Artists</h1>
							<ArtistList artists={this.state.artists} />
						</div>
					</div>
				</div>
				<div className="clr"></div>
			</div>
		);
	}
}