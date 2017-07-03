import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'styled-components';

class Playlists extends Component {
  
  render() { 
    const {allPlaylists} = this.props.data;
    const SectionTitle = styled.h1`
      font-size: 28px;
      margin: 40px 0 0 80px;
      color: #cecece;
      text-transform: uppercase;
    `;
    const List = styled.ul`
      margin: 4px 0 0 80px;
      padding: 0;
      font-size: 20px;
    `;
    const Item = styled.li`
      font-size: 1em;
      font-weight: bold;
      list-style: none;
      padding: 2px;
    `;
    
    return (
      <section>
        <SectionTitle>My Playlists</SectionTitle>
        <List>
          {allPlaylists !== undefined ? allPlaylists.map((playlist) => (
           <Item key={playlist.id}> {playlist.title} </Item>
          )) : <p>...Loading</p>}
        </List>
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
