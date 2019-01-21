import Particles from 'react-particles-js';
import React from 'react';
import './About.css';
import { config } from './particlesjs-config';

export class About extends React.Component {
  render() {
    return (
      <Particles
        className="canvas-div"
        canvasClassName="canvas-content"
        params={config}
      />
    );
  }
}
