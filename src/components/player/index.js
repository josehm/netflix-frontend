import React from 'react';
import ReactPlayer from 'react-player';


class Player extends React.Component {

  constructor(props)
  {
    super(props)

    this.state=
    {
      playing: props.playing? true: false,
      url: this.props.url,
      pip: false,
      played: 0,
      loaded: 0,
      duration: 0,
    }

  }

  load = url => {
    this.setState({
      played: 0,
      loaded: 0,
    })
  }


  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    //console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleDuration = (duration) => {
    //console.log('onDuration', duration)
    this.setState({ duration })
  }



  handleEnablePIP = () => {
    //console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    //console.log('onDisablePIP')
    this.setState({ pip: false })
  }


  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ played: 0, playing: false })
  }

  ref = player => {
    this.player = player
  }

  render() {

    return(
      <div style={{ position:'relative', width:'100%', height:'100%' }}>
        <ReactPlayer
          ref={this.ref}
          url={this.state.url} 
          playing={this.state.playing} 
          pip={this.state.pip}
          onEnablePIP={this.handleEnablePIP}
          onDisablePIP={this.handleDisablePIP}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
          width='100%'
          height='auto'
          style={{ position:'absolute', top: 0, left:0, bottom:0, right:0, zIndex:5  }}
        />

        <div style={{ 
          position:'absolute', left:0, bottom:0, right:0, width: '100%', zIndex:10  

          }} >
          <div style={{position:'relative', width:'100%', height:25}} >
            <input
              type='range' min={0} max={1} step='any'
              value={this.state.played}
              onMouseDown={this.handleSeekMouseDown}
              onChange={this.handleSeekChange}
              onMouseUp={this.handleSeekMouseUp}
              className='video-progress-bar'
            />
            <progress className='video-played-bar' max={1} value={this.state.played} style={{width: '95%'}} />
            <progress className='video-load-bar' max={1} value={this.state.loaded} style={{width: '95%'}} />
          </div>
          <div style={{position:'relative', width:'100%', height:25}} >
            <button onClick={this.handleStop}>Stop</button>
            <button onClick={this.handlePlayPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
          </div>
        </div>

      </div>
    )

  }
}



export default Player; 