import React from 'react';
import LoginForm from './loginForm';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

import Header from '../comun/Header';

const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    doLogin(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (values, mutation) => {
    this.setState({
      ...values
    }, () => mutation())
  }

  setToken = ({ token }) => {
    if (token) {
      localStorage.setItem("jwt", token);
      this.props.handleLoggin();
    }
  }

  render() {
    return (

      
      <div>
        <Mutation mutation={LOGIN} variables={this.state}>
          {
            (doLogin, { data, error, loading }) => {
              if (data) {
                this.setToken(data.doLogin);
                return <Redirect to="/home" />
              }
              if (loading) return <p>haciendo login..</p>

              return (
                <Header>

                  <div className="container-fluid">
                    <div className="row justify-content-between align-items-center"
                        style={{ margin:'0 1rem', paddingTop: 20 }}
                      >
                      <div className="col-auto">
                        <img src="/images/netflix.png" style={{ height: 35, width: 125 }} alt="netflix" />
                      </div>
                    </div>
                  </div>

                  <div className="container" style={{ padding: '70px 45px' }}>
                    <div className="row justify-content-center">
                      <div className="text-white col-lg-8 text-center bg-dark" 
                          style={{
                            padding: '60px 68px 40px',
                            marginBottom: 90,
                            minHeight: 660
                          }} 
                      >
                        <LoginForm
                          handleSubmit={(values) => this.handleSubmit(values, doLogin)}
                        />
                        {
                          error && <p>Error</p>
                        }
                      </div>
                    </div>
                  </div>


                </Header>
              );

            }
          }
        </Mutation>
      </div>
    );
  }
}

export default Login;