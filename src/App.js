import React, { Component } from 'react';
import './App.css';
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
      <div>
        <div>
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
      </div>
    );
  }
}

export default App;
