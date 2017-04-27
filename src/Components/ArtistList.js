import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistList(props) {
	return(
		<div>
				{
					props.artists.map((artist, i) => {
					let x =  artist.images.length == 0 ? 
								'http://dalelyles.com/musicmp3s/no_cover.jpg' : artist.images[0].url;
					return (<div className="artist-block" key={i}>
								<div>
									<Link to={`/artist/${artist.id}`} >
										<img className="album-art" src={x} >
										</img>
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

