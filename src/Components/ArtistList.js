import React from 'react';
import { Link } from 'react-router-dom';

export default class ArtistList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hoverIndex: null
		}
		this.enterLink = this.enterLink.bind(this);
		this.exitLink = this.exitLink.bind(this);
	}

	enterLink(i) {
		this.setState({ hoverIndex: i });
	}

	exitLink() {
		this.setState({ hoverIndex: null });
	}

	render() {
		return(
			<div>
					{
						this.props.artists.map((artist, i) => {
						let x =  artist.images.length == 0 ? 
									'http://dalelyles.com/musicmp3s/no_cover.jpg' : artist.images[0].url;
						return (<div className="artist-block" key={i}>
									<div className="album-art">
										<Link onMouseEnter={() => this.enterLink(i)}
									  		  onMouseLeave={this.exitLink} to={`/artist/${artist.id}`} >
											<img className="album-art" src={x} >
											</img>
											<div className={this.state.hoverIndex == i ? "blur-album-art" : ""}></div>
										</Link>
									</div>
									<div className="artist-name">
										<Link className="artist-name--link" to={`/artist/${artist.id}`} >
											{artist.name}
										</Link>
									</div>
								</div>)
						})
					}
			</div>
		);
	}
}

