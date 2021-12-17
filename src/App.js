import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends React.Component {
  render() {
    let iconNames = ["alice.png", "camera.gif", "city.png", "flandre scarlet.gif", "hinanawi-tenshi-B.gif", "kirisame marisa3.png", "kirisame marisa4.png", "koishi2.png", "maguro.png", "marisa.png", "Rumia.png", "sea-chicken.png", "sheep.png", "tamatsukuri_misumaru.png", "test.png", "yamame2.png", "yorigami_shion.gif", "yuuka2.png"];
    let colLefts = [];
    let colRights = [];

    for (let n = 0; n < iconNames.length; n++) {
      let iconName = iconNames[n];
      if (n % 2) {
        colRights.push(iconName);
      } else {
        colLefts.push(iconName);
      }
    }

    return (
      <Row>
        <Col xs={6} className="col-left">
          {colLefts.map((value) => <Icon src={value} />)}
        </Col>
        <Col xs={6} className="col-right">
          {colRights.map((value) => <Icon src={value} />)}
        </Col>
      </Row>
    );
  }
}

class Icon extends React.Component {
  render() {
    return (
      <div className="icon">
        <img className="iconImage" src={"https://raw.githubusercontent.com/Soybeanman504/homepage/master/img/" + this.props.src} />
        <div className="iconMask"></div>
      </div>
    );
  }
}

export default App;