import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import CreateMovie from './CreateMovie';
import Header from './header';

class App extends Component {
  render() {
    return (
        <div className="center w85">
          <Header/>
          <div className="ph3 pv1 background-gray">
            <Switch>
              <Route exact path="/" component={MovieList}/>
                <Route exact path="/create" component={CreateMovie}/>
            </Switch>
          </div>
        </div>
    )
  }
}

export default App;