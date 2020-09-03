import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams, fetchFixtures, fetchUser } from './actions/manageFetch'
import TeamsContainer from './components/teamsContainer'
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FixturesContainer from './components/fixtureContainer'
import FixturePage from './components/fixturePage';
import LoginForm from './components/loginForm';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchFixtures();
  }

  handleLogin = (user) => {
    this.props.fetchUser(user)
  }

  handleLogout = () => {
    sessionStorage.removeItem('user')
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar handleLogout={this.handleLogout} />
          <Route exact path='/' render={() => <h1>Welcome to Soccer Fans Connected</h1>} />
          <Route exact path='/teams' render={routerProps => <TeamsContainer {...routerProps} teams={this.props.teams} />} />
          <Route exact path='/fixtures' render={routerProps => <FixturesContainer {...routerProps} fixtures={this.props.fixtures} /> } />
          <Route exact path='/fixtures/:id' render={routerProps => <FixturePage {...routerProps} fixtures={this.props.fixtures} />} />
          <Route exact path='/login' render={routerProps => <LoginForm {...routerProps} handleLogin={this.handleLogin}/>} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    fixtures: state.fixtures,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchFixtures: () => dispatch(fetchFixtures()),
    fetchUser: (user) => dispatch(fetchUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
