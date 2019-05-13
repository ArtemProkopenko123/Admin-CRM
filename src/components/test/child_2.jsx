import React, { Component } from 'react'

export default class ChildTwo extends Component {

  constructor(){
    super();
  }
  testr = 'HELLO3';
  
  methodOne(){

    return this.testr;
  }

  render() {
    return (
        <>
            CHILD 2 :  {this.props.name}
        </>
    )
  }
}

export class ExtraClass extends ChildTwo {

  getData(){
    return this.testr;
  }
  

}
let t = new ChildTwo();
let t2 = new ExtraClass();
t2.seyHello = function(val) {
  return (this.testr);
}
console.log("METHOD6:   ", t );
console.log("METHOD2:   ", t2.seyHello());
