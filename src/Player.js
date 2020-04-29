import React from 'react'

class Player extends React.Component {
	componentDidMount () {
	    const script = document.createElement("script");
	    script.src = "https://sdk.scdn.co/spotify-player.js";
	    script.async = true;
	    document.body.appendChild(script);
	}

	render() {
		return (
			<div className="player">Player goes here</div>
		)
	}
}


export default Player;