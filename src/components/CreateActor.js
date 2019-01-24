import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_ACTOR = gql`
mutation ($name: String, $age: Int, $sexo: String) {
    createActor(
    name: $name,
    sexo: $sexo,
    age: $age,
  ){
    id
    name
    sexo
    age
  }
}
`;

class CreateActor extends Component {
    state = {
        name: '',
        age: '',
        sexo: '',
    };

    render() {
        const { name, age, sexo } = this.state;
        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={name}
                        onChange={e => this.setState({name: e.target.value})}
                        type="text"
                        placeholder="Name of the actor"
                    />
                    <input
                        className="mb2"
                        value={age}
                        onChange={e => this.setState({age: e.target.value})}
                        type="number"
                        placeholder="Age of the actor"
                    />
                    <input
                        className="mb2"
                        value={sexo}
                        onChange={e => this.setState({sexo: e.target.value})}
                        type="text"
                        placeholder="M for male, F for female"
                    />
                </div>
                <Mutation
                    mutation={POST_ACTOR}
                    variables={{name, sexo, age}}
                    onCompleted={() => this.props.history.push('/listActors/')}
                >
                    {postActor => <button onClick={postActor}>Submit</button>}
                </Mutation>
            </div>
        )
    }
}

export default CreateActor;