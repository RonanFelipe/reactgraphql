import React, { Component } from 'react';

class Actor extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.name} -
                    "{this.props.sexo}" -
                    {this.props.age}
                </div>
            </div>
        )
    }
}

export default Actor;