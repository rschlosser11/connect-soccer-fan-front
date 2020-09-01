import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  
  render() {
    console.log(this.props)
    console.log('in APP render')
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

export default connect(mapStateToProps)(App);
