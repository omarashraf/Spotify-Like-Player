import React from 'react';
import { Link } from 'react-router-dom';

export default function TrackList(props) {
	console.log("<-->");
	console.log(props);
	let x = '';
	if (props.currentTrack != null && !props.currentTrack !== undefined) {
		console.log("currentTrack name");
		console.log(props.currentTrack.name);
		x = props.currentTrack.name;
	}
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
											<div className={track.name === x ? "active-track" : ""}>
												<div className="small-2 columns">
													<span className={track.name === x ? 
														"track-number active-track" : "track-number"}>{i + 1}.</span>
												</div>
												<div className="small-8 columns">
													{track.name}
												</div>
												<div className={track.name === x ? 
														"small-2 columns track-duration active-track" : "small-2 columns track-duration"}>
													{track.duration_ms}
												</div>
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