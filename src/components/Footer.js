import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {

  render() {
    const year = new Date().getFullYear();
    const Footer = styled.footer`
    width: 100%;
    padding: 40px 0;
    margin-top: 20rem;
    font-weight: 700;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    color: #f0f0f0;
    background-color: #17DD83;
    letter-spacing: 3px;

      a{
        color: #f0f0f0;
        padding: 0 2px 4px;
        text-decoration: none;
        letter-spacing: 2px;
      }

      a:hover{
        color: #1c1c1c;
        border-bottom: 1px solid #1c1c1c;
      }

    `;

    return (
      <Footer>
        &copy; {year} Spotless App - Created by <a href='https://twitter.com/drianhillman' target='_blank'>Drian Hillman</a>
      </Footer>
    );
  }
}

export default Footer;
