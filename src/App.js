import React, { Component } from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import Playlists from './components/Playlists.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Callback from './Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './history.js';

require('dotenv').config();

const auth = new Auth();
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'https://spotless-api.herokuapp.com/graphql',
      }),
    });
  }
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  
  render() {
    const { isAuthenticated } = auth;
    
    return (
      <div>
        
        <Router history={history} component={App}>
          <section>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          </section>
        </Router>
        
        <a onClick={this.goTo.bind(this, 'home')}>Home</a> | 
        
        {
          !isAuthenticated() && (
              <a onClick={this.login.bind(this)}>
                Log In
              </a>
            )
        }
        {
          isAuthenticated() && (
              <a onClick={this.logout.bind(this)}>
                Log Out
              </a>
            )
        }
      
        <ApolloProvider client={this.createClient()}>
          <Playlists />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
