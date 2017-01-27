import React from 'react';
import { Question } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <Question />
      </div>
    )
  }
}

export default App;
