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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
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
            <span>
              {"I am a "}
              <span className="App-description-info">
                {/* Filled in with typewriter */}
              </span>
              .
            </span>
          </div>
          <div>
            <span>
              {"Thank you for visiting my "}
              <span className="App-description-thanks">
                {/* Filled in with typewriter */}
              </span>
              .
            </span>
          </div>
          <div>
            <input type="button" className="App-link" id="link-5" onClick={this.handleClick} value=" Github "/>
            <input type="button" className="App-link" id="link-4" onClick={this.handleClick} value="YouTube"/>
            <input type="button" className="App-link" id="link-3" onClick={this.handleClick} value="Twitter"/>
            <input type="button" className="App-link" id="link-2" onClick={this.handleClick} value="Linkedin"/>
            <input type="button" className="App-link" id="link-1" onClick={this.handleClick} value="Medium"/>
          </div>
          <div>
            <h3 className="Section-titles">About Me</h3>

          </div>
        </header>
      </div>
    );
  }
}
