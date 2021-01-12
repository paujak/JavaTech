import React, { Component } from 'react'
import ChangeUserComponent from './ChangeUserComponent'

export class ChangeUserContainer extends Component {
    
    constructor(){
        super();
        this.state = {};
    }
    
    newUserName = (event) => {
        event.preventDefault();
        alert("Now current user is " + event.target[0].value);
        event.target.reset();      
    }
    render() {
        return (
            <div>
                <ChangeUserComponent onSubmit={this.newUserName} />
            </div>
        )
    }
}

export default ChangeUserContainer
