import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

// import Animate from './Animate'

const ProfileImage = styled.img`
  width: 6em;
  height: 6.5em;
  border-radius: 50%;
  margin-top: -40px;
`;

const ProfileTitle = styled.h1`
  color: #1f10de;
  font-family: cursive;
  font-weight: bolder;
  padding-top: 2%; 
  
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 5px 10px;
  color: purple;
  font-size: 30px;
`
class Header extends Component {
  render() {
    return (
      <figure className="aboutMe">
       
      <HeaderDiv>
        <Link to="/">
        
          <ProfileTitle>FULL STACK WEB DEVELOPER</ProfileTitle>   
          <hr className="divider my-4" />      
        {/* <Animate /> */}
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
         
          <NavLink to='/contact'>CONTACT</NavLink>
          
        </div>
        <hr />
      </HeaderDiv>
      </figure>
    );
  }
}

export default Header;