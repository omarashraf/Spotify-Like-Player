import React from 'react';
import ReactPlayer from 'react-player';

export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: true
		}
		this.togglePlay = this.togglePlay.bind(this);
	}

	togglePlay() {
		this.setState({ playing: !this.state.playing });
	}

	handleProgress(played) {
		console.log(played);
	}

	render() {
		if (!this.props.current) {
			return null;
		}
		if (!this.props.current.preview_url) {
			alert("No track!");
		}
		return(
			<div className="player">
				<div className="row">
					<div className="player-current-info">
						<h6>{this.props.current.name}</h6>
						<p>{this.props.current.artists[0].name}</p>
					</div>
					<div className="small-12 columns control-board">
						<a className="single-control" onClick={this.props.previousTrack}>
							<i className="fa fa-backward"></i>
						</a>
						<a className="single-control" onClick={this.togglePlay}>
							<i className={ this.state.playing ? "fa fa-pause" : "fa fa-play" }></i>
						</a>
						<a className="single-control" onClick={this.props.nextTrack}>
							<i className="fa fa-forward"></i>
						</a>
						<ReactPlayer onProgress={this.handleProgress} playing={this.state.playing} url={this.props.current.preview_url} hidden />
					</div>
				</div>
			</div>
		);
	}
}