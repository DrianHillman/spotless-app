import React, { Component } from 'react';
import styled from 'styled-components';
import banner from './img/app-banner@2x.png'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import Playlists from './components/Playlists.js';
import Footer from './components/Footer.js';

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
    const App = styled.div`
      font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      color: #1c1c1c;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
    `;
    const Nav = styled.header`
      padding: 16px;
      border-bottom: 1px solid #cecece;
      font-weight: bold;
    `;
    const NavLink = styled.a`
      cursor: pointer;
      padding: 2px;
      font-size: 12pt;
      
      &:hover {
    		border-bottom: 1px solid #1c1c1c;;
    	}
    `;
    const Spacer = styled.span`
      padding: 0 8px;
      
      &:before{
        content: "•";
      }
    `;
    const SpotlessIcon = styled.svg`
      width: 20px;
      -ms-transform: translateY(1px); /* IE 9 */
      -webkit-transform: translateY(1px); /* Safari */
      transform: translateY(1px);
    `;
    const Path = styled.path`
      fill: #cecece;
    `;
    const WordMark = styled.span`
      float: right;
      font-size: 14pt;
      color: #cecece;
    `;
    const Jumbotron = styled.img`
      width: 100%;
    `;

    return (
      <App>
        <Nav>
          <NavLink onClick={this.goTo.bind(this, 'home')}>Home</NavLink>
          <Spacer/>
          {
            !isAuthenticated() && (
              <NavLink onClick={this.login.bind(this)}>Login / Signup</NavLink>
            )
          }
          {
            isAuthenticated() && (
              <NavLink onClick={this.logout.bind(this)}>Log Out</NavLink>
            )
          }
          <WordMark>
            <SpotlessIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.38 30">
              <defs></defs>
              <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
              <Path class="cls-1" d="M.82,12.84H16.35a.82.82,0,0,0,.82-.82V10.38a.82.82,0,0,0-.82-.82H.82a.82.82,0,0,0-.82.82V12A.82.82,0,0,0,.82,12.84Zm0,5.72H11.44a.82.82,0,0,0,.82-.82V16.1a.82.82,0,0,0-.82-.82H.82A.82.82,0,0,0,0,16.1v1.63A.82.82,0,0,0,.82,18.56Zm0,5.72H11.44a.82.82,0,0,0,.82-.82V21.83a.82.82,0,0,0-.82-.82H.82a.82.82,0,0,0-.82.82v1.63A.82.82,0,0,0,.82,24.28Zm24.52,2.45H.82a.82.82,0,0,0-.82.82v1.63A.82.82,0,0,0,.82,30H25.34a.82.82,0,0,0,.82-.82V27.55A.82.82,0,0,0,25.34,26.73ZM22.81,0V17.1h0c-2.78-2.32-8.68-1.23-8.75,2.58-.12,4.92,9.77,6,10.1-1V5.46c3.88.72,4.64,4.35,2.64,7.31,3.58-3.69,3-5.87,1-8-1.56-1.69-3.44-3-5-4.78Z"/>
              </g></g>
            </SpotlessIcon>Spotless App
          </WordMark>
        </Nav>
        <Jumbotron src={banner} alt="spotless banner" />
        
        <ApolloProvider client={this.createClient()}>
          <Playlists />
        </ApolloProvider>

        <Footer />
      </App>
    );
  }
}

export default App;
