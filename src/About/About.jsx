import Particles from 'react-particles-js';
import React from 'react';
import './About.css';
import { config } from './particlesjs-config';

export class About extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://cdn.rawgit.com/progers/pathseg/master/pathseg.js';
    script.async = true;

    document.body.appendChild(script);
    console.log('did mant');
  }
  render() {
    return (
      <Particles
        className="aa"
        canvasClassName="canvasClassName"
        params={config}
      />
    );
  }
}
