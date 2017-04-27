import React from 'react';

export default function TopTracks(props) {
	return(
		<div>
			<ul>
		{
			props.top_tracks.map((track, i) => {
				return(<li key={i}>
							<div className="row">
								<div className="small-9 columns">
									<div className="row">
										<div className="small-2 columns">
											{i + 1}
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