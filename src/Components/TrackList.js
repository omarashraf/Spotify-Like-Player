import React from 'react';
import { Link } from 'react-router-dom';

export default function TrackList(props) {
	console.log("<-->");
	console.log(props);
	return(
		<div>
			<ul>
			{
				props.tracks.map((track, i) => {
					return (
							<li className="single-track-container" key={i}>
								<div onClick={() => props.playTrack(props.tracks, i)} className="single-track-link">
									<div className="row">
										<div className="small-10 columns">
											<div className="row">
												<div className="small-2 columns">
													<span className="track-number">{i + 1}.</span>
												</div>
												<div className="small-8 columns">
													{track.name}
												</div>
												<div className="small-2 columns track-duration">
													{track.duration_ms}
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>)
				})
			}
			</ul>
		</div>
	);
}