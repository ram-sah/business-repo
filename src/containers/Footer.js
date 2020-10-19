import React, { Component } from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../theme/styleConstants.js'

const FooterDiv = styled.div`
  padding-top: 8rem;
  padding-bottom: 0;
  background-color: ${ColorScheme.mainLight};
  text-align: center;
  height: 250px;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
`;

const FAIcon = styled.i`
  &:hover {
    color: ${ColorScheme.third}
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <div className="row social" style={{ margin: 0 }}>
          <div className="col-lg-12">
            
            <br />
          </div>
        </div>
        <div className="row" id="copyright" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <p className="small aaz1">© 2020. RAM</p>
          </div>
        </div>
      </FooterDiv>
    );
  }
}

export default Footer;
