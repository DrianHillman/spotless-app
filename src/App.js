import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import Playlists from './components/Playlists.js';

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
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
          <div className="Nav">
            <a onClick={this.goTo.bind(this, 'home')}>Home</a> |&nbsp; 
  
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
          </div>
        
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

        <ApolloProvider client={this.createClient()}>
          <Playlists />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
