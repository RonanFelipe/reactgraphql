import React, { Component } from 'react';
import Actor from './movie';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ACTOR_QUERY = gql`
    query {
        actors {
            id
            name
            age
            sexo
        }
    }
`;

class ActorList extends Component {
    render() {
        return (
            <Query query={ACTOR_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>;
                    if (error) return <div>Error</div>;

                    const actorsToRender = data.actors;

                    return (
                        <div>
                            {actorsToRender.map(actor => <Actor key={actor.id} actor={actor}/>)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default ActorList;