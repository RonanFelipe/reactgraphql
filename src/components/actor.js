import React, { Component } from 'react';

class Actor extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.actor.name} -
                    "{this.props.actor.sexo}" -
                    {this.props.actor.age}
                </div>
            </div>
        )
    }
}

export default Actor;