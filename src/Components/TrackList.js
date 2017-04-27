import React from 'react';

export default function TrackList(props) {
	return(
		<div>
			<ul>
			{
				props.tracks.map((track, i) => {
					return (<li key={i}>
								<div className="row">
									<div className="small-9 columns">
										<div className="row">
											<div className="small-2 columns">
												{track.track_number}
											</div>
											<div className="small-8 columns">
												{track.name}
											</div>
											<div className="small-2 columns">
												{track.duration_ms}
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