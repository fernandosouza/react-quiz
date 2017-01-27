import React from 'react';
import { QuestionCreator } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <QuestionCreator />
      </div>
    )
  }
}

export default App;
