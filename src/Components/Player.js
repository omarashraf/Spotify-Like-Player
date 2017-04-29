import React from 'react';
import ReactPlayer from 'react-player';

export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: true,
			played: {}
		}
		this.togglePlay = this.togglePlay.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
	}

	togglePlay() {
		this.setState({ playing: !this.state.playing });
	}

	handleProgress(playedSoFar) {
		this.setState({ played: playedSoFar });
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
						<div className="player-album">
							<img width="60" height="60" src="http://dalelyles.com/musicmp3s/no_cover.jpg" />
						</div>
						<div className="player-desc">
							<h6 className="track-name-player">{this.props.current.name}</h6>
							<p>{this.props.current.artists[0].name}</p>
						</div>
						<div className="clr"></div>
					</div>
					<div className="small-12 columns control-board">
						<div>
							<a className="single-control" onClick={this.props.previousTrack}>
								<i className="fa fa-backward"></i>
							</a>
							<a className="single-control" onClick={this.togglePlay}>
								<i className={ this.state.playing ? "fa fa-pause" : "fa fa-play" }></i>
							</a>
							<a className="single-control" onClick={this.props.nextTrack}>
								<i className="fa fa-forward"></i>
							</a>
						</div>
						<div className="progress-bar-container">
							<div className="progress-bar">
								<div className="progress-bar-dynamic" style={{width: this.state.played.played * 100 + "%"}}></div>
							</div>
						</div>
						<ReactPlayer onProgress={this.handleProgress} playing={this.state.playing} url={this.props.current.preview_url} hidden />
					</div>
				</div>
			</div>
		);
	}
}