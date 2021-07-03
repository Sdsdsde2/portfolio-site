import React, { Component } from 'react';
import './App.css';
import pfp from './pfpexample.png';
import anime from 'animejs/lib/anime.es.js';

export default class App extends Component {
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
    this.animationStart();
  }

  handleClick(e) {
    e.preventDefault();
    // console.log(e)
    // console.log(e.target.id)
    // NOTE TO FUTURE SELF: When I click on the text i.e "Github" it doesn't redirect.
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
          <div className="App-pfp-boarder">
            <img src={pfp} className="App-pfp"></img>
          </div>
          <div>
            <h1 className="App-title">
              Shane Possibly
            </h1>
            <input type="button" className="App-link" id="link-5" onClick={this.handleClick} value=" Github "/>
            <input type="button" className="App-link" id="link-4" onClick={this.handleClick} value="YouTube"/>
            <input type="button" className="App-link" id="link-3" onClick={this.handleClick} value="Twitter"/>
            <input type="button" className="App-link" id="link-2" onClick={this.handleClick} value="Linkedin"/>
            <input type="button" className="App-link" id="link-1" onClick={this.handleClick} value="Medium"/>
          </div>
        </header>
      </div>
    );
  }
}

