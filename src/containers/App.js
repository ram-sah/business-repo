import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header.js'
import Footer from './Footer.js'
import Animate from '../Animate.js'

export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.5em;
`;

export const CenteredHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
`
const ContainerDiv = styled.div`
  margin: 1% 15% 3% 15%;
  flex: 1;
  font-family: 'Open Sans', sans-serif; 
`
class App extends Component {
  render() {
    return (

      <div>
        <AppDiv>
          <Header />
          <Animate />
          <ContainerDiv>
            {this.props.children}
          </ContainerDiv>
          <Footer />
        </AppDiv>
      </div>
    );
  }
}

export default App;

{/* <div  style={{ backgroundImage:`url(${background})` }}></div>
<section className="card mb-3" style={ {width: "1000px" }}></section> */}