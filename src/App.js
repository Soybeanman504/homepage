import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Icon src={"test.png"} />
    );
  }
}

class Icon extends React.Component {
  render() {
    return (
      <div className="icon">
        <img src={"https://raw.githubusercontent.com/Soybeanman504/homepage/master/img/" + this.props.src} />
      </div>
    );
  }
}

export default App;