import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <div className="fw7 mr1">
                        Movies I've Watched
                    </div>
                    <Link to="/" className="ml1 no-underline black">
                        List Movies
                    </Link>
                    <div className="ml1">|</div>
                    <Link to="/create" className="ml1 no-underline black">
                        Create Movies
                    </Link>
                    <Link to="/listActors" className="ml1 no-underline black">
                        List Actors
                    </Link>
                    <Link to="/createActor" className="ml1 no-underline black">
                        Create Actors
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);