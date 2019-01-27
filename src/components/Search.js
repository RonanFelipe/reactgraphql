import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Movie from './movie';

const MOVIE_SEARCH_QUERY = gql`
    query {
        movies($search: String!) {
            id
            name
            noteImdb
            genre
            duration
            year
        }
    }
`;

class Search extends Component {
    state = {
        movies: [],
        filter: ''
    };

    render() {
        return (
            <div>
                <div>
                    Search
                    <input
                        type="text"
                        onChange={e => this.setState({filter: e.target.value})}
                    />
                    <button onClick={() => this._executeSearch()}>OK</button>
                </div>
                {this.state.movies.map((movie, index) => (
                    <Movie key={movie.id} movie={movie} index={index}/>
                ))}
            </div>
        )
    }

    _executeSearch = async () => {

    }
}

export default withApollo(Search);