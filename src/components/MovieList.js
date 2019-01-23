import React, { Component } from 'react';
import Movie from './movie';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const MOVIES_QUERY = gql`
    query {
        movies {
            id
            name
            year
            noteImdb
            genre
            duration
        }
    }
`;

class MovieList extends Component {
    render() {
        return (
            <Query query={MOVIES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>;
                    if (error) return <div>Error</div>;

                    const moviesToRender = data.movies;

                    return (
                        <div>
                            {moviesToRender.map(movie => <Movie key={movie.id} movie={movie}/>)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default MovieList;