import React, { Component } from 'react'
import { CenteredHeader } from './App.js'
import '../theme/globalStyle'
class Home extends Component {
  render() {
    return (
      // <section style={ {width: "1000px" }}></section>     
      <div className='card'> 
        <CenteredHeader> <strong> WELCOME !</strong> </CenteredHeader>
        <hr className="divider my-4" />
        <CenteredHeader>Hello ! . I live with Creativity.</CenteredHeader>
        <div className="home">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for visiting my portfolio. I'm a Full Stack Web Developer with a passion for building awesome Design with Code.
        I enjoy Coding. I have completed my Full Stack Web Developer Course from Penn LPS Boot Camp
        Philadelphia.        
        My journey in <strong>Coding </strong>
        started on May-2020. Since then, I've been doing well in my class with <strong>A+</strong> rating.          
        I have completed HTML5, CSS, JavaScript, JQuery, Ajax, APIs, Bootstrap,
        GitHub, Nodejs, Node Express Handlebars, MySql, MongoDB, Redux, ReactJs, Heroku.
        I have completed Masters Degree from .
        </div>
      </div>          
    );
  }
}

export default Home;
