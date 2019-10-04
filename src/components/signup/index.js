import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import Form from './signupForm';

const SIGNUP = gql`
  mutation resgistro($data: UserInput) {
    addUser(data:$data) {
      token
    }
  }
`;

class SignUp extends React.Component {

  handleMutation = (formValues, addUserMutation) => {
    console.log("TCL: SignUp -> handleMutation -> formValues", formValues)
    addUserMutation({
        variables: {
          data: {
            ...formValues,
          }
        }
      });
  }

  render() {
    return (
      <div>
        <Mutation mutation={SIGNUP}>
          {
            (addUser, { data, error, loading }) => {
              if (data) {
                localStorage.setItem('jwt', data.addUser.token);
                return (<Redirect to="/home" />);
              }

              if (error) {
                console.log(error);
                return (<p>Error</p>);
              }

              return (
                <Form
                  handleFormSubmit={(formValues) =>
                    this.handleMutation(formValues, addUser)}
                />);
            }
          }
        </Mutation>
      </div>
    );
  }
}

export default SignUp;