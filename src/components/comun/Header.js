import React from 'react'

const Header = (props) => (
    <div style={{
      height: '100%'
    }}>
      <div style={{position:'relative', minHeight:'100%'}} >
        <div style={{ zIndex: '-1', position:'absolute',
                      top: -100,
                      right: 0,
                      bottom: 0,
                      left: 0 }}>
          <img src="/images/netflix-home.jpg" className="img-fluid" alt="Home"
                style={{zIndex: 'auto',
                        width: '100%',
                        height: '100%'  }} />
          
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', 
                        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)',
                        zIndex: 'auto',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0 }} />
        </div>
        {props.children}
      </div>
    </div>
  )

export default Header;