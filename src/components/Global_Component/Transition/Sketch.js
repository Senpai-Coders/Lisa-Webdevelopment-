import React, { Component } from "react";
import Sketch from "react-p5";

const width =  window.innerWidth;
const height = window.innerHeight;
let ball = [ [] ];
let speed = 0 ;


export default class App extends Component {
 

  setup = (p5, parent) => {
    p5.createCanvas(width,height).parent(parent)
  }
  draw = (p5) => {
    p5.background(p5.color('#2f1452'))
    p5.fill(255)
    // rect(mouseX,mouseY,3,-100)
  
  

    let x = p5.floor(p5.random(0,width) );
    let y = p5.floor(p5.random(0,10) ) ;
    let s = p5.floor(p5.random(1,20))


    if (this.bubbleInterAct(p5,x,y,s))
        ball.unshift( [x,y,s,0,0] )
    for(let i = 0 ; i < ball.length ; i ++){
        p5.fill(255)
        x = ball[i][0] 
        y = ball[i][1]
        s = ball[i][2]
        ball[i][4] = 0 
        // ball[i][2] =  ball[i][2] +1;
        // ball.splice(i, 1);
      
            let d = p5.dist(p5.mouseX,p5.mouseY,ball[i][0],ball[i][1])
     
            if(d >= s/2+100  ){
                ball[i][1] += ball[i][3]
                ball[i][3] +=1*1.3
                p5.noFill()
            }else{
                if(   ball[i][1]  < p5.mouseY){
                    ball[i][1] -=s
                    ball[i][3] =0;
                    if(ball[i][0]  < p5.mouseX){
                        ball[i][0] -=1 
                    }else{
                        ball[i][0] +=1
                    }
                    
                }else{
                    ball[i][1] += ball[i][3]
                    ball[i][3] +=1*1.3
                }
                p5.fill(
                    p5.floor( p5.random(144,255) ),
                    p5.floor( p5.random(144,255) ),
                    p5.floor( p5.random(144,255) )
                )
        
            
            }
            if( ball[i][1] >= height-s ){
                ball.splice(i, 1);
            }
       

            this.circ(p5,x,y,s)
        }
   
    }
    circ(p5,x,y,s){
        p5.stroke(
            p5.floor( p5.random(144,255) ),
            p5.floor( p5.random(144,255) ),
            p5.floor( p5.random(144,255) )  )
        p5.ellipse(x,y,s)
    }
    bubbleInterAct = (p5,x,y,s) =>{
  
        for(let i = 0 ; i < ball.length ; i ++){
            var d = p5.dist(x,y,ball[i][0],ball[i][1]);
            if(d < ball[i][2]/2+s/2)  
                return false;
        }
        return true;
    }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}