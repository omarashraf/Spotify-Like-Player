import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumList(props) {
	return(
		<div>
			<ul>
				{
					props.albums.map((album, i) => {
					let x =  album.images.length == 0 ? 
							'http://dalelyles.com/musicmp3s/no_cover.jpg' : album.images[0].url;
					return(
					<div className="artist-block" key={i}>
						<div>
							<Link to={`/album/${album.id}`} >
								<img className="album-art" src={x} >
								</img>
							</Link>
						</div>
						<div className="artist-name">
							<Link className="artist-name--link" to={`/album/${album.id}`} >
								{album.name}
							</Link>
						</div>
					</div>)}
					)
				}
			</ul>
		</div>
	);
}