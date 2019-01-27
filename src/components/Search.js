import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Movie from './movie';

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
        // code
    }
}

export default withApollo(Search);