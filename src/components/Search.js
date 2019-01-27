import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Movie from './movie';

const MOVIE_SEARCH_QUERY = gql`
    query ($filter: String){
        movies(search: $filter) {
            id
            name
            year
            noteImdb
            genre
            duration
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
        const { filter } = this.state;
        const result = await this.props.client.query({
            query: MOVIE_SEARCH_QUERY,
            variables: { filter },
        });
        const movies = result.data.movies;
        this.setState({ movies })
    }
}

export default withApollo(Search);