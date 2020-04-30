/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import ParticleLines from "../components/particles/particle-lines"

type ParticlesBackgroundProps = {
  type: string,
  num?: number,
  bg?: boolean,
  color?: string,
  config?: string
}

const defaultProps = {
  stroke: false,
  hiddenMobile: false,
}

const ParticlesBackground = ({ type, num = 10, bg, color, config }: ParticlesBackgroundProps) => {
  const getBackgroundParticles = () => {
    let particles;
  
    // Only lines are supported for now
    switch (String(type).toLowerCase()) {
      case "lines":
      default:
        particles = <ParticleLines num={num} bg={bg} color={color} />;
        break;
    }
    
    return particles;
  }
  
  return getBackgroundParticles();
}

export default ParticlesBackground

ParticlesBackground.defaultProps = defaultProps