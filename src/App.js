import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams, fetchFixtures, fetchUser, newUser, fetchComments } from './actions/manageFetch'
import TeamsContainer from './components/teamsContainer'
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FixturesContainer from './components/fixtureContainer'
import FixturePage from './components/fixturePage';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchFixtures();
    this.props.fetchComments();
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
          <Route exact path='/fixtures/:id' render={routerProps => <FixturePage {...routerProps} fixtures={this.props.fixtures} comments={this.props.comments} />} />
          <Route exact path='/login' render={routerProps => <LoginForm {...routerProps} handleLogin={this.handleLogin}/>} />
          <Route exact path='/signup' render={routerProps => <SignUpForm {...routerProps} handleSignUp={this.props.newUser} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    fixtures: state.fixtures,
    user: state.user,
    comments: state.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchFixtures: () => dispatch(fetchFixtures()),
    fetchUser: (user) => dispatch(fetchUser(user)),
    newUser: (user) => dispatch(newUser(user)),
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
