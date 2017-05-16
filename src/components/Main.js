import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { graphql, gql } from 'react-apollo';

class Main extends Component {
  
  render() { 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Spotless App<br/>To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const EnhancedMainWithData = graphql(gql`
  query{
    allPlaylists{
      title
      id
    }
  }
`)(Main);
export default EnhancedMainWithData;
