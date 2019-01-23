import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.movie.name} ({this.props.movie.year})
                    ({this.props.movie.noteImdb})
                    ({this.props.movie.genre})
                    ({this.props.movie.duration})
                </div>
            </div>
        )
    }
}

export default Movie;