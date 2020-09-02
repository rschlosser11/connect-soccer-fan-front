import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams, fetchFixtures } from './actions/manageFetch'
import TeamsContainer from './components/teamsContainer'
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FixturesContainer from './components/fixtureContainer'
import FixturePage from './components/fixturePage';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchFixtures();
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <h1>Welcome to Soccer Fans Connected</h1>
          <Route exact path='/teams' render={routerProps => <TeamsContainer {...routerProps} teams={this.props.teams} />} />
          <Route exact path='/fixtures' render={routerProps => <FixturesContainer {...routerProps} fixtures={this.props.fixtures} /> } />
          <Route exact path='/fixtures/:id' render={routerProps => <FixturePage {...routerProps} fixture={this.props.fixtures.find(fix => fix.id === routerProps.id)} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    fixtures: state.fixtures,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchFixtures: () => dispatch(fetchFixtures()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
