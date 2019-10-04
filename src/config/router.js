import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import Error404 from '../components/404';
import SignUp from '../components/signup';
import Login from '../components/login';
import Logout from '../components/logout';
import Home from '../components/home';
import Watch from '../components/watch';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => <Component {...props} />}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.usserLogged === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

const NoAuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.usserLogged === true
      ? <Redirect to='/home' />
      : <Component {...props} />
  )} />
);

class Routing extends React.Component {
  render() {

    return (
      <Router>

        {this.props.usserLogged?
          <header className="header header-absolute" style={{backgroundColor:'#222'}}> 
            <NavBar />
          </header>
        : null}

        <Switch>
          <NoAuthRoute
            exact
            path='/'
            usserLogged={this.props.usserLogged}
            component={() => <Welcome />}
          />
          
          <NoAuthRoute
            path="/login"
            usserLogged={this.props.usserLogged}
            component={ () => <Login handleLoggin={this.props.handleLoggin} />}
          />
          <NoAuthRoute
            path="/signup"
            usserLogged={this.props.usserLogged}
            component={ () => <SignUp />}
          />

          <Route
            path="/logout"
            usserLogged={this.props.usserLogged}
            component={ () => <Logout handleLoggin={this.props.handleLoggin} />}
          />
          
          <PrivateRoute
            path="/home"
            usserLogged={this.props.usserLogged}
            component={ () => <Home />}
          />

          <PrivateRoute
            path="/watch/:id"
            usserLogged={this.props.usserLogged}
            component={Watch}
          />

          <PublicRoute
            component={ () => <Error404 />}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routing;