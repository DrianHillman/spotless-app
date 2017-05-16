import React, { Component } from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import Main from './components/Main.js' ;

class App extends Component {
  
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'https://spotless-api.herokuapp.com/graphql',
      }),
    });
  }
  
  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <Main />
      </ApolloProvider>
    );
  }
}

export default App;
