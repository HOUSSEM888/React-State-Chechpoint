import React, { Component } from 'react';
import './App.css';
import PersonProfile from './Components/PersonProfile';
import Timer from './Components/Timer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName:  ' Gabriel Brun',
        bio: "A passionate software developer.",
        imgSrc: 'https://www.developpeur-react-nord.com/static/1be47d3d3d570b0f0b73320d7d512586/18ec4/photo_profil_gabriel_brun_github.jpg',
        Occupation: "Software Developper Front-end  React"
      },
      show: true
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {show && <Timer />}
          {show && <PersonProfile person={person} />}
       
        </header>
      </div>
    );
  }
}
