import React, { Component } from 'react';
import './App.css';
import spotless_icon from './img/spotless-icon.svg'
import banner from './img/app-banner.png'
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
            <a onClick={this.goTo.bind(this, 'home')}>Home</a> &bull;&nbsp; 
  
            {
              !isAuthenticated() && (
                  <a onClick={this.login.bind(this)}>
                   Login / Signup
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
            <span className="wordmark"><img className="spotless-icon" src={spotless_icon} alt="app icon" />Spotless App</span>
          </div>
        
          <div className="App-header">
            <img src={banner} alt="spotless banner" className="app-banner" />
          </div>

        <ApolloProvider client={this.createClient()}>
          <Playlists />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
