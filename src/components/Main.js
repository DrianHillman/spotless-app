import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { graphql, gql } from 'react-apollo';

class Main extends Component {
  
  render() { 
    const {allPlaylists} = this.props.data;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {allPlaylists !== undefined ? allPlaylists.map((playlist) => (
           <li key={playlist.id}> {playlist.title} </li>
          )) : <p>...Loading</p>}
        </ul>
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
