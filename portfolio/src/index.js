import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Code Rain script

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "abcdefghijklmnopqrstuvwxyz1234567890-=_+[]{};:?!@#$%^&*";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
  drops[x] = 1; 

//drawing the characters
function draw()
{
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
  ctx.fillRect(0, 0, c.width, c.height);
  
  ctx.fillStyle = "#d1ede5"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for(var i = 0; i < drops.length; i++)
  {
    //a random chinese character to print
    var text = chinese[Math.floor(Math.random()*chinese.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i*font_size, drops[i]*font_size);
    
    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if(drops[i]*font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;
    
    //incrementing Y coordinate
    drops[i]++;
  }
}

// Typewriter Script

function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 30,
    tempTypeSpeed = 0;

  var type = function() {
    
      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === "  ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = (Math.random() * typeSpeed) + 30;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 30;
          writingTag = false;
          if (tagOpen) {
              var newSpan = document.createElement("span");
              t.appendChild(newSpan);
              newSpan.innerHTML = tag;
              tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
      }

  };

  return {
      type: type
  };
}

var typer = document.getElementById('typewriter');

var typewriter = setupTypewriter(typer);

typewriter.type();




setInterval(draw, 33);