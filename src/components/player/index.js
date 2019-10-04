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

  render() {

    return(
      <div>
        <ReactPlayer 
          url={this.state.url} 
          playing={this.state.playing} 
          pip={this.state.pip}
          onEnablePIP={this.handleEnablePIP}
          onDisablePIP={this.handleDisablePIP}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
          width='100%'
          height='auto'
        />
        
        <table>
          <tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handlePlayPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
              </td>
            </tr>
          {/*
            <tr>
              <th>Seek</th>
              <td>
                <input
                  type='range' min={0} max={1} step='any'
                  value={this.state.played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
                />
              </td>
            </tr>
            <tr>
              <th>Played</th>
              <td><progress max={1} value={this.state.played} /></td>
            </tr>
            <tr>
              <th>Loaded</th>
              <td><progress max={1} value={this.state.loaded} /></td>
            </tr>
          */}
          </tbody>
        </table>

        </div>

    );

  }


}

export default Player; 