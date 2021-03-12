import React, { Component } from "react";
import Sketch from "react-p5";

const windowWidth =  window.innerWidth;
const windowHeight =  window.innerHeight;

let balls = [ ] 
let numberOfCircles = 0; 
let randomCircle = [100,200,30,30,0.009,0.009];
let c1, c2;

export default class App extends Component {

  setup = (p5, parent) => {
    balls = []
    numberOfCircles = parseInt( (windowHeight > windowWidth ?windowHeight : windowWidth )*0.15); 
    c2 = p5.color('#2f1452');
    c1 = p5.color('#72005f');
    
    p5.createCanvas(windowWidth, windowHeight ).parent(parent)

    for( let i = 0 ;i  < numberOfCircles ; i++ ){
      balls.push(this.circle_MODEL(p5))
    }

  }
  draw = (p5) =>{
    // p5.background(p5.color('#2f1452'));
    this.setGradient(p5,c1, c2);
    this.draw_circles( p5 );

  }
  setGradient = (p5, c1, c2) => {
    // noprotect
    p5.noFill();
    for (var y = 0; y <  windowHeight; y++) {
      var inter = p5.map(y, 0,  windowHeight , 0, 1);
      var c = p5.lerpColor(c1, c2, inter);
      p5.stroke(c);
      p5.line(0, y,  windowWidth, y);
    }
  }

  
  circle_MODEL = (p5) =>{

    let colors = p5.color('#4affe4')
    let xSpeed = p5.random( [0.2,1])*p5.random( [-1,1]);
    let ySpeed = p5.random( [0.2,1])*p5.random( [-1,1]);
    let x = p5.random(0 , windowWidth );
    let y = p5.random(0 , windowHeight );
    let radius = 1; 
    let outerRadius = (windowHeight > windowWidth ?windowHeight : windowWidth )*0.03 ;
    let circleStroke = 0.3;
  
    return {
      circlesFrame: [x , y , radius , radius],
      circlesProps: [xSpeed , ySpeed , radius+outerRadius, radius+outerRadius],
      circleStyles: [colors, circleStroke ]
    } 
  
  }
  

  draw_circles = (p5)=>{
    for ( let  i = 0 ; i < balls.length; i++){
  
  
      p5.stroke(0);
  
      p5.strokeWeight(0);
      p5.ellipse( randomCircle[0], randomCircle[1], randomCircle[2] , randomCircle[3])
  
      p5.stroke(balls[i].circleStyles[0]);
  
      p5.strokeWeight(balls[i].circleStyles[1]);
  
      p5.noFill()
      randomCircle[0] += randomCircle[4]
      randomCircle[1] += randomCircle[5]
  
  
     
  
      if(  randomCircle[0] > windowWidth || randomCircle[0] < 0 ){
        randomCircle[4] =  randomCircle[4]*-1
        
      }
      if(  randomCircle[1] > windowHeight || randomCircle[1] < 0 ){
        randomCircle[5] =  randomCircle[5]*-1;
   
  
      }
  
  
      p5.ellipse(
        balls[i].circlesFrame[0], 
        balls[i].circlesFrame[1], 
        balls[i].circlesFrame[2],
        balls[i].circlesFrame[3]
      );
      
      
  
      let distance = p5.dist( balls[i].circlesFrame[0],  balls[i].circlesFrame[1], p5.mouseX, p5.mouseY )
      let circDistance = p5.dist( randomCircle[0],randomCircle[1], balls[i].circlesFrame[0],  balls[i].circlesFrame[1] )
      
      if(circDistance < balls[i].circlesProps[2] + balls[i].circlesProps[2] ){
        
        p5.line( 
          balls[i].circlesFrame[0],
          balls[i].circlesFrame[1], 
          randomCircle[0],randomCircle[1],
        );
  
        for ( let  j = 0 ; j < balls.length; j++){
          let distance =p5.dist( 
            balls[i].circlesFrame[0],  
            balls[i].circlesFrame[1],
            balls[j].circlesFrame[0],  
            balls[j].circlesFrame[1],
          )
    
    
    
          if( distance < balls[i].circlesProps[2]+  balls[j].circlesProps[2]){
            p5.line( 
              balls[i].circlesFrame[0],
              balls[i].circlesFrame[1], 
              balls[j].circlesFrame[0],
              balls[j].circlesFrame[1]);
          }
          
        }
  
      }
      if( distance < balls[i].circlesProps[2] + balls[i].circlesProps[2]){
        p5.line( 
          balls[i].circlesFrame[0],
          balls[i].circlesFrame[1], 
          p5.mouseX, p5.mouseY 
        );
  
        for ( let  j = 0 ; j < balls.length; j++){
          let distance =p5.dist( 
            balls[i].circlesFrame[0],  
            balls[i].circlesFrame[1],
            balls[j].circlesFrame[0],  
            balls[j].circlesFrame[1],
          )
    
    
    
          if( distance < balls[i].circlesProps[2]+  balls[j].circlesProps[2]){
            p5.line( 
              balls[i].circlesFrame[0],
              balls[i].circlesFrame[1], 
              balls[j].circlesFrame[0],
              balls[j].circlesFrame[1]);
          }
          
        }
      }
  
      // ellipse(
      //   balls[i].circlesFrame[0], 
      //   balls[i].circlesFrame[1], 
      //   balls[i].circlesProps[2], 
      //   balls[i].circlesProps[3]
      // );
      
  
      balls[i].circlesFrame[0] +=  balls[i].circlesProps[0]
      balls[i].circlesFrame[1] +=  balls[i].circlesProps[1]
  
      
  
  
      if(balls[i].circlesFrame[0] > windowWidth ||  balls[i].circlesFrame[0] < 0  ){
        balls[i].circlesProps[0] = -1*(balls[i].circlesProps[0]);
        balls[i].circlesProps[1] = (balls[i].circlesProps[1])*p5.random( [-1,1]);
      }
      if(balls[i].circlesFrame[1] > windowHeight || balls[i].circlesFrame[1] < 0  ){
        balls[i].circlesProps[1] = -1*( balls[i].circlesProps[1]);
        balls[i].circlesProps[0] = -1*( balls[i].circlesProps[0])*p5.random( [-1,1]);
      }
  
      
      
    }
    
  }
  

  render(){
    return <Sketch setup={this.setup} draw={this.draw} />
  }


}









