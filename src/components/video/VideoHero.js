import React from 'react'
import ReactPlayer from 'react-player'

class VideoHero extends React.Component {

  constructor(props)
  {
    super(props)

    this.state=
    {
      playing: props.playing? true: false,
      url: props.url,
      thumbnail: props.thumbnail?  props.thumbnail: false,
      played: 0,
      muted: true
    }

  }

  handleStop = () => {
    this.setState({ played: 0, playing: false })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleMuted = () => {
    this.setState({ muted: !this.state.muted})
  }

  render() {
    return(
      <div style={{ position:'relative', width:'100%', height:'100%' }}>
        <ReactPlayer
          playing={this.state.playing} 
          url={this.state.url}
          volume={0.8}
          muted={this.state.muted}
          width='100%'
          height='auto'
          style={{ position:'absolute', top: 0, left:0, bottom:0, right:0, zIndex:5  }}
        />

        <div
          style={{ 
            position:'absolute', 
            top: 0,
            bottom: '40%',
            left: '5%',
            width: '35%',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'flex-end'
          }} >
            <div>
              <h2>{this.props.title}</h2>
            </div>
            <div>
              <p>{this.props.description}</p>
            </div>
            
            <div>
              <button >Play</button>
              <button >My List</button>
              <button >More info</button>
            </div>
        </div>

        <div
          style={{ 
            position:'absolute', 
            top: 0,
            bottom: '40%',
            right: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'flex-end',
            alignItems: 'center',
          }} >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }} >
              <button onClick={() => this.handleMuted() } >{this.state.muted?'Sound':'Muted'}</button>
              <div><span>{this.props.clasification}</span></div>
            </div>
        </div>


      </div>
    )
  }
}

export default VideoHero; 