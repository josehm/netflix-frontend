import React from 'react';
import Header from './comun/Header';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {


  render() {
    return(
      <div>
        <Header>
        
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center"
                style={{ margin:'0 1rem', paddingTop: 20 }}
              >
              <div className="col-auto">
                <img src="/images/netflix.png" style={{ height: 35, width: 125 }} alt="Netflix" />
              </div>
              <div className="col-auto">
                <Link className="btn btn-danger" to="/login">Iniciar sesión</Link>
              </div>
            </div>
          </div>

          <div className="container" style={{ padding: '70px 45px' }}>
            <div className="row justify-content-center">
              <div className="text-white col-lg-8 text-center" 
                  style={{
                    padding: '75px 0',  
                  }} 
              >

                <h1 style={{ fontSize: '3.125rem',
                              lineHeight: 1.1,
                              marginBottom: '0.5rem'
                }}>
                  Programas y películas sin límite y mucho más.
                </h1>
                
                <h2 style={{ fontSize: '2.5rem',
                              lineHeight: 1.1,
                              marginBottom: '0.5rem'
                }}>
                  Disfruta donde quieras. Cancela en cualquier momento.
                </h2>

                <div className="col-auto">
                  <Link className="btn btn-danger" to="/signin">Probar ahora</Link>
                </div>

              </div>
            </div>
          </div>

        </Header>
        
        <div className="bg-dark">
        
          <div className="container" style={{ padding: '70px 45px' }}>
            <div className="row">
              <div className="col-md-6" >
                <h1 className="text-white">Lorem ipsum dolor sit amet</h1>
                <h2 className="text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur.
                </h2>
                <div className="col-auto">
                  <Link className="btn btn-danger" to="/signin">Probar ahora</Link>
                </div>
              </div>
              <div className="col-md-6" >
                <img src="/images/tv.png" className="img-fluid" alt="tv" />
              </div>
            </div>
          </div>

          <div className="container" style={{ padding: '70px 45px' }}>
            <div className="row">
              <div className="col-md-6" >
                <img src="/images/tv.png" className="img-fluid" alt="tv" />
              </div>
              <div className="col-md-6" >
                <h1 className="text-white">Lorem ipsum dolor sit amet</h1>
                <h2 className="text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur.
                </h2>
                <div className="col-auto">
                  <Link className="btn btn-danger" to="/signin">Probar ahora</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ padding: '70px 45px' }}>
            <div className="row">
              <div className="col-md-6" >
                <h1 className="text-white">Lorem ipsum dolor sit amet</h1>
                <h2 className="text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur.
                </h2>
                <div className="col-auto">
                  <Link className="btn btn-danger" to="/signin">Probar ahora</Link>
                </div>
              </div>
              <div className="col-md-6" >
                <img src="/images/tv.png" className="img-fluid" alt="tv" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

}

export default Welcome;