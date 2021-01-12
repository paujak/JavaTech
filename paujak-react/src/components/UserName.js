import React, { Component } from 'react'

class UserName extends Component {

    state = {name: "guest"};

    render() {
        return (
            <div>
                {this.state.name}    
            </div>
        )
    }
}

export default UserName
