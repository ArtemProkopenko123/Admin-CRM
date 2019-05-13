import React, { Component } from 'react'
import ChildTwo from './child_2';

export default class ChildOne extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         LastName: 'Prokopenko',
         Address: 'Heroev ave. apt 324'
      }
    }
    

  render() {
      const {LastName, Address} = this.state
    return (
        <div>
            <div>
                CHILD 1:  {LastName}, {Address}
            </div>
            <br/>
            <span>
                <ChildTwo {...this.props}/>
            </span>
      </div>
    )
  }
}
