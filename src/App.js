import React from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from './actions/teamActions'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTeams();
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Hello World!</h1>
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
