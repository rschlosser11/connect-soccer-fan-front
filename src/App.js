import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from './actions/teamActions'
import TeamsContainer from './components/teamsContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTeams();
  }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to Soccer Fans Connected</h1>
        <TeamsContainer teams={this.props.teams} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.teams;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
