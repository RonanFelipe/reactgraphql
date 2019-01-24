import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MOVIE = gql`
mutation ($name: String, $year: Int, $noteImdb: Float, $genre: String, $duration: Int) {
    createMovie(
        name: $name,
        year: $year,
        noteImdb: $noteImdb,
        genre: $genre,
        duration: $duration,
    ){
        name
        year
        noteImdb
        genre
        duration
    }
}
`;

class CreateMovie extends Component {
    state = {
        name: '',
        year: '',
        noteImdb: '',
        genre: '',
        duration: '',
    };

    render() {
        const { name, year, noteImdb, genre, duration } = this.state;
        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={name}
                        onChange={e => this.setState({name: e.target.value})}
                        type="text"
                        placeholder="Name of the movie"
                    />
                    <input
                        className="mb2"
                        value={year}
                        onChange={e => this.setState({year: e.target.value})}
                        type="number"
                        placeholder="Year of the movie"
                    />
                    <input
                        className="mb2"
                        value={noteImdb}
                        onChange={e => this.setState({noteImdb: e.target.value})}
                        type="text"
                        placeholder="Imdb rating of the movie"
                    />
                    <input
                        className="mb2"
                        value={genre}
                        onChange={e => this.setState({genre: e.target.value})}
                        type="text"
                        placeholder="Genres of the movie"
                    />
                    <input
                        className="mb2"
                        value={duration}
                        onChange={e => this.setState({duration: e.target.value})}
                        type="text"
                        placeholder="Name of the movie"
                    />
                </div>
                <Mutation
                    mutation={POST_MOVIE}
                    variables={{name, year, noteImdb, genre, duration}}
                    onCompleted={() => this.props.history.push('/')}
                >
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </div>
        )
    }
}

export default CreateMovie;