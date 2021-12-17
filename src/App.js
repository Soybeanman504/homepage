import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends React.Component {
  render() {
    return (
        <Row>
          <Icon src={"test.png"} />
          <Icon src={"flandre scarlet.gif"} />
          <Icon src={"test.png"} />
          <Icon src={"test.png"} />
          <Icon src={"test.png"} />
        </Row>
    );
  }
}

class Icon extends React.Component {
  render() {
    return (
      <Col xs={6}>
        <div className="icon">
          <img className="iconImage" src={"https://raw.githubusercontent.com/Soybeanman504/homepage/master/img/" + this.props.src} />
          <div className="iconMask"></div>
        </div>
      </Col>
    );
  }
}

export default App;