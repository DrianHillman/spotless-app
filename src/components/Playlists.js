import React, { Component } from 'react';
import '../App.css';
import { graphql, gql } from 'react-apollo';

class Playlists extends Component {
  
  render() { 
    const {allPlaylists} = this.props.data;
    
    return (
      <section>
        <h1>My Playlists</h1>
        <ul className="playlists">
          {allPlaylists !== undefined ? allPlaylists.map((playlist) => (
           <li key={playlist.id}> {playlist.title} </li>
          )) : <p>...Loading</p>}
        </ul>
      </section>
    );
  }
}

const EnhancedPlaylistsWithData = graphql(gql`
  query{
    allPlaylists{
      title
      id
    }
  }
`)(Playlists);

export default EnhancedPlaylistsWithData;
