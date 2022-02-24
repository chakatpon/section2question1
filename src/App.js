import React, { Component } from 'react';

import Navigation from './Navigation';
import QuestionOne from './QuestionOne';

const LINKS = [
  { label: 'Website', to: 'https://www.robinwieruch.de/' },
  { label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];

class App extends Component {
  render() {
    return (
      <div>
        <QuestionOne></QuestionOne>
      </div>
    );
  }
}

export default App;
