import React, { Component } from 'react';
import './App.css';
import pfp from './portfoliopfp.jpg';
import anime from 'animejs/lib/anime.es.js';

var i = 0;
var j = 0;
var k = 0;
var nameTxt = 'Shane Rachal';
var infoTxt = 'Full-Stack Web Developer';
var thanksTxt = 'Website';

export default class App extends Component {
  typingStart = () => {
    if (i < nameTxt.length) {
      document.getElementsByClassName("App-description-name")[0].innerHTML += nameTxt.charAt(i);
      i++;
      setTimeout(this.typingStart, 100);
    }
    else if (j < infoTxt.length) {
      document.getElementsByClassName("App-description-info")[0].innerHTML += infoTxt.charAt(j);
      j++;
      setTimeout(this.typingStart, 100);
    }
    else if (k < thanksTxt.length) {
      document.getElementsByClassName("App-description-thanks")[0].innerHTML += thanksTxt.charAt(k);
      k++;
      setTimeout(this.typingStart, 100);
    }
    else {
      this.animationStart();
    }
  }

  animationStart() {
    for(var i = 1; i < 6; i++) {
      // eslint-disable-next-line no-loop-func
      function timer(){
        var k = i;
        setTimeout(()=>{
          var textWrapper = document.querySelector(`#link-` + k);
          textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
          var target = `#link-` + k

          anime.timeline()
          .add({
            targets: target,
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: 285
          })
          .add({
            targets: target,
            translateX: 500,
            autoplay: true,
            duration: 1650,
            delay: 15,
            easing: 'easeInOutSine'
          })
        }, k * 750);
      }
      timer();
    }
  }

  componentDidMount() {
    this.typingStart();
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.id === "link-5") {
      window.location.href="https://github.com/Sdsdsde2"
    }

    if (e.target.id === "link-4") {
      window.location.href="https://www.youtube.com/channel/UCaIuY9OCxRTaNHNs3VhTTEQ/videos"
    }

    if (e.target.id === "link-3") {
      window.location.href="https://twitter.com/ShanePossibly"
    }

    if (e.target.id === "link-2") {
      window.location.href="https://www.linkedin.com/in/shane-rachal-91013920a/"
    }

    if (e.target.id === "link-1") {
      window.location.href="https://shanerpersonal.medium.com/"
    }
  }

  scrollElement(clickedSec) {
    console.log(clickedSec.target.offsetParent.id)
    if (clickedSec.target.offsetParent.id === 'link-5')
      var currentSec = document.getElementById("#homeSection")
    else if (clickedSec.target.offsetParent.id === 'link-4')
      var currentSec = document.getElementById("#aboutSection")
    else if (clickedSec.target.offsetParent.id === 'link-3')
      var currentSec = document.getElementById("#skillsSection")
    else if (clickedSec.target.offsetParent.id === 'link-2')
      var currentSec = document.getElementById("#projectsSection")
    else if (clickedSec.target.offsetParent.id === 'link-1')
      var currentSec = document.getElementById("#contactSection")
    currentSec.scrollIntoView({behavior: 'smooth'})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="topnav">
            <a onClick={this.scrollElement} href="#homeSection" className="App-link" id="link-5">Home</a>
            <a onClick={this.scrollElement} href="#aboutSection" className="App-link" id="link-4">About</a>
            <a onClick={this.scrollElement} href="#skillsSection" className="App-link" id="link-3">Skills</a>
            <a onClick={this.scrollElement} href="#projectsSection" className="App-link" id="link-2">Projects</a>
            <a onClick={this.scrollElement} href="#contactSection" className="App-link" id="link-1">Contact</a>
            {/* <input type="button" className="App-link"  onClick={this.handleClick} value=" Github "/>
            <input type="button" className="App-link" id="link-4" onClick={this.handleClick} value="YouTube"/>
            <input type="button" className="App-link" id="link-3" onClick={this.handleClick} value="Twitter"/>
            <input type="button" className="App-link" id="link-2" onClick={this.handleClick} value="Linkedin"/>
            <input type="button" className="App-link" id="link-1" onClick={this.handleClick} value="Medium"/> */}
          </div>
          <h1 id="#homeSection" className="App-title">
            Shane Possibly
          </h1>
          <div className="App-pfp-boarder">
            <img src={pfp} className="App-pfp"></img>
          </div>
          <div>
            <span className="App-description">
              {"Hello, my name is "}
              <span className="App-description-name">
                {/* Filled in with typewriter */}
              </span>
              .
            </span>
          </div>
          <div>
          <span className="App-description">
              {"I am a "}
              <span className="App-description-info">
                {/* Filled in with typewriter */}
              </span>
              .
            </span>
          </div>
          <div>
          <span className="App-description">
              {"Thank you for visiting my "}
              <span className="App-description-thanks">
                {/* Filled in with typewriter */}
              </span>
              .
            </span>
          </div>
        </header>
        <div id="#aboutSection" className="About-section">
          <h3 className="Section-titles">About Me</h3>
          <p className="Info-paragraphs">
            I was born and raised in Houston Texas, which is where I am currently located.
            I've recently graduated from Flatiron School's Software Engineering program with a total of 525 clock hours.
            As a child I was always fascinated with computers
            and now I am finally living my dream of being a Software Engineer.
            I am always looking to learn and try new things and I plan to continue expanding
            my knowledge on different programming languages.
            I look forward to working on big projects and creating a better tomorrow for everyone.
          </p>
        </div>
        <div className="Skills-section">
          <h3 id="#skillsSection" className="Section-titles">Skills</h3>
          <div>
            <div className="Skill-box">
              <h4>Ruby</h4>
              <p className="Skill-desc">Ruby is an interpreted, high-level, general-purpose programming language.</p>
              <ul className="Skill-examples">
                <li>Object Oriented Programming</li>
                <li>Models, Controllers, and Routing</li>
                <li>Command Line Interface Applications</li>
                <li>SQL Table Migrations and Seeding</li>
              </ul>
            </div>
            <div className="Skill-box">
              <h4>Ruby on Rails</h4>
              <p className="Skill-desc">Rails is a server-side web application framework written in Ruby under the MIT License.</p>
              <ul className="Skill-examples">
                <li>Experience making Apps with full CRUD</li>
                <li>Foundation using Rails as a Backend API</li>
                <li>Implemented Model-View-Control structure</li>
                <li>Backend routing for the Frontend fetch requests</li>
              </ul>
            </div>
            <div className="Skill-box">
              <h4>HTML</h4>
              <p className="Skill-desc">HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
              <ul className="Skill-examples">
                <li>Experience using HTML as a Frontend</li>
                <li>Knowledge of making fetch reqeusts to Backend</li>
                <li>Strong ability in modifying the DOM</li>
                <li>Conditional rendering of data recieved from fetch requests</li>
              </ul>
            </div>
            <div className="Skill-box">
              <h4>CSS</h4>
              <p className="Skill-desc">CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
              <ul className="Skill-examples">
                <li>Experience using CSS to style my webpages</li>
                <li>Knowledge of creating custom color themes</li>
                <li>Strong ability in creating a beautiful user interface</li>
                <li>Conditional rendering of webpage data using ids</li>
              </ul>
            </div>
            <div className="Skill-box">
              <h4>JavaScript</h4>
              <p className="Skill-desc">JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</p>
              <ul className="Skill-examples">
                <li>Experience using Object Oriented JavaScript</li>
                <li>Knowledge of creating custom functions in JavaScript</li>
                <li>Effectively make fetch requests to the Backend</li>
                <li>Making API calls to commerce platforms like Stripe API</li>
              </ul>
            </div>
            <div className="Skill-box">
              <h4>React</h4>
              <p className="Skill-desc">React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
              <ul className="Skill-examples">
                <li>Experience using React and ReactRoutes</li>
                <li>Knowledge of handling fetch "promise" data</li>
                <li>Effectively make fetch requests to the Backend</li>
                <li>Conditional rendering depending on fetch's "promise" data</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Projects-section">
          <h3 id="#projectsSection" className="Section-titles">Projects</h3>
          <div>
            <div className="Project-box">
              <h4>Simple To-do App</h4>
              <p className="Project-desc">Basic to-do app created to practice more JS as well as sharpen my skills in the backend.</p>
              <ul className="Project-info">
                <li>Users can register or login</li>
                <li>Users can view their account info</li>
                <li>Users can view list of all tasks</li>
                <li>Users can favorite specific tasks</li>
                <li>Users can view their favorited tasks</li>
                <li>Users can complete or unfavorite a task</li>
                <li>Users can create new tasks</li>
              </ul>
              <a href="https://github.com/Sdsdsde2/todo-app-frontend" className="Project-link" id="todo-demo-link">Github</a>
              <a href="https://www.youtube.com/watch?v=iPKr4SkVODg" className="Project-link" id="todo-code-link">Demo</a>
            </div>
            <div className="Project-box">
              <h4>Easy Remote Virtual Machine</h4>
              <p className="Project-desc">This project was made with the idea of automating sales and VM connections in mind.</p>
              <ul className="Project-info">
                <li>Users can register or login</li>
                <li>Users can view their account info</li>
                <li>Users can purchase credits using Stripe API</li>
                <li>Users can subscribe to Virtual Machines using credits</li>
                <li>Users can connect to, terminate, or review their VM</li>
                <li>Users can see all reviews</li>
              </ul>
              <a href="https://github.com/Sdsdsde2/phase-5-frontend" className="Project-link" id="p5-demo-link">Github</a>
              <a href="https://www.youtube.com/watch?v=p518sxIumpg" className="Project-link" id="p5-code-link">Demo</a>
            </div>
            <div className="Project-box">
              <h4>Another Rhythm Game</h4>
              <p className="Project-desc">This project idea comes from making a website with a game similar to the rhythm game "OSU".</p>
              <ul className="Project-info">
                <li>Users can view the games instructions</li>
                <li>Users can play as a guest</li>
                <li>Users can enter a name to save their score</li>
                <li>Users can choose to save or delete their score upon completing the game</li>
                <li>Users can view the top 10 scores from other players</li>
              </ul>
              <a href="https://github.com/Sdsdsde2/phase-3-project-rythm-game" className="Project-link" id="p3-demo-link">Github</a>
              <a href="https://www.youtube.com/watch?v=ggOhEXUuZmA" className="Project-link" id="p3-code-link">Demo</a>
            </div>
            <div className="Project-box">
              <h4>Vacation Booking App</h4>
              <p className="Project-desc">This project comes from the idea of making a Ruby CLI App that helped users plan out and book their vacations.</p>
              <ul className="Project-info">
                <li>Users can register or login to an existing account</li>
                <li>Users can view different vacation sights</li>
                <li>Users can view different flights</li>
                <li>Users can submit a review for their vacation</li>
                <li>Users can sign out of their accounts</li>
              </ul>
              <a href="https://github.com/coriblount/ruby-project-guidelines" className="Project-link" id="p1-demo-link">Github</a>
              <a href="https://www.youtube.com/watch?v=oWQQU7nFwaI" className="Project-link" id="p1-code-link">Demo</a>
            </div>
          </div>
        </div>
        <div className="Contact-section">
          <h3 id="#contactSection" className="Section-titles">Contact Me</h3>
        </div>
      </div>
    );
  }
}

