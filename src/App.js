import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
//import { Query, Subscription } from 'react-apollo';
// import {
//   NotificationContainer,
//   NotificationManager
// } from 'react-notifications';

import client from './apollo';

import Router from './config/router';

const LOGED_USER_QUERY = gql`
  query {
    loginState @client {
      userLogged
    }
  }
`;

// const POST_ADDED = gql`
// subscription {
//   postAdded {
//     title
//     content
//   }
// }
// `;

class App extends React.Component {

  handleLoggin(usuarioLogeado = true) {
    client.mutate({
      mutation: gql`
        mutation setUserLogged($logged: Boolean) {
          setUserLogged(logged: $logged) @client{
              data
          }
        }
      `,
      variables: { logged: usuarioLogeado }
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) this.handleLoggin();
  }

  render() {
    return (
      <div className="App">
        {/*
        <Subscription subscription={POST_ADDED}>
          {
            ({ data }) => {
              if (data) NotificationManager.success('Success message', data.postAdded.title);
              return <NotificationContainer />;
            }
          }
        </Subscription>
        */}
        <Query query={LOGED_USER_QUERY}>
          {
            ({ data }) => {
              return (
                <Router
                  handleLoggin={this.handleLoggin}
                  usserLogged={data.loginState.userLogged}
                />
              );
            }
          }
        </Query>
  
      </div>
    )
  }
}

export default App;