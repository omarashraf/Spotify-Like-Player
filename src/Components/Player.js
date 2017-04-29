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
				<div>
					<h5>{this.props.current.name}</h5>
					<p>{this.props.current.artists[0].name}</p>
				</div>
				<button onClick={this.props.previousTrack}>Previous</button>
				<button onClick={this.togglePlay}>{ this.state.playing ? "Pause" : "Play" }</button>
				<button onClick={this.props.nextTrack}>Next</button>
				<ReactPlayer onProgress={this.handleProgress} playing={this.state.playing} url={this.props.current.preview_url} hidden />
			</div>
		);
	}
}