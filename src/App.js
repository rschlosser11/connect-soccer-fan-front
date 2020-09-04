import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams, fetchFixtures, fetchUser, newUser, fetchComments, newComment, removeUser } from './actions/manageFetch'
import TeamsContainer from './components/teamsContainer'
import NavBar from './components/navBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FixturesContainer from './components/fixtureContainer'
import FixturePage from './components/fixturePage';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import Homepage from './components/homepage';

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
    this.props.removeUser();
    sessionStorage.removeItem('user')
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' render={routerProps => <NavBar {...routerProps} handleLogout={this.handleLogout} user={this.props.user} />} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/teams' render={routerProps => <TeamsContainer {...routerProps} teams={this.props.teams} />} />
          <Route exact path='/fixtures' render={routerProps => <FixturesContainer {...routerProps} fixtures={this.props.fixtures} /> } />
          <Route exact path='/fixtures/:id' render={routerProps => <FixturePage {...routerProps} fixtures={this.props.fixtures} comments={this.props.comments} addNewComment={this.props.newComment} />} />
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
    comments: state.comments,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchFixtures: () => dispatch(fetchFixtures()),
    fetchUser: (user) => dispatch(fetchUser(user)),
    newUser: (user) => dispatch(newUser(user)),
    fetchComments: () => dispatch(fetchComments()),
    newComment: (comment) => dispatch(newComment(comment)),
    removeUser: () => dispatch(removeUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
