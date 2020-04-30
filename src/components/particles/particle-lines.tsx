import React from "react";
import Proton from "proton-engine";
import RAFManager from "raf-manager";
import Canvas from "./canvas";

type  ParticleLinesProps = {
  num: number,
  bg: boolean,
  color: string
}

const defaultProps = {

}

const ParticleLines = ({ num, bg, color }: ParticleLinesProps) => {
  //this.renderProton = this.renderProton.bind(this);
 

  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {};
  }

  const getColor = (color, a) => {
    let c;
    if (color) {
        c = hexToRgb(color);
        return `rgba(${c.r},${c.g},${c.b}, ${a})`;
    } else {
        return null;
    }
  }

  const onCanvasDidMount = (canvas) => {
    if(color){
      canvas.style.backgroundColor = color;
    }
  }

  const componentWillUnmount = () => {
    try {
      RAFManager.remove(renderProton);
      this.proton.destroy();
    } catch (e) { }
  }

  const onCanvasInited = (canvas, width, height) => {
    createProton(canvas, width, height);
    RAFManager.add(renderProton);
  }

  const onResize = (width, height) => {
    this.crossZoneBehaviour.zone.width = width;
    this.crossZoneBehaviour.zone.height = height;
    this.proton.renderers[0].resize(width, height);
  }

  const createProton = (canvas, width, height) => {
    this.proton = new Proton();

    const emitter = new Proton.Emitter();
    emitter.damping = 0.008;
    emitter.rate = new Proton.Rate(this.props.num ? this.props.num : 250);
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(4));
    emitter.addInitialize(
      new Proton.Velocity(
        new Proton.Span(1.5),
        new Proton.Span(0, 360),
        "polar"
      )
    );
    const mouseObj = {
      x: width / 2,
      y: height / 2
    };

    const attractionBehaviour = new Proton.Attraction(mouseObj, 0, 0);
    const crossZoneBehaviour = new Proton.CrossZone(
      new Proton.RectZone(0, 0, canvas.width, canvas.height),
      "cross"
    );
    emitter.addBehaviour(new Proton.Color("random"));
    emitter.addBehaviour(attractionBehaviour, crossZoneBehaviour);
    emitter.addBehaviour(new Proton.RandomDrift(10, 10, 0.05));
    emitter.p.x = canvas.width / 2;
    emitter.p.y = canvas.height / 2;
    emitter.emit("once");

    this.proton.addEmitter(emitter);
    this.proton.addRenderer(this.createRenderer(canvas));
    this.crossZoneBehaviour = crossZoneBehaviour;
  }

  const createRenderer = (canvas) => {
    const context = canvas.getContext("2d");
    const renderer = new Proton.CanvasRenderer(canvas);
    renderer.onProtonUpdate = () => {
      context.fillStyle = getColor(this.props.color, 0.02) || "rgba(0, 0, 0, 0.02)";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    renderer.onParticleUpdate = function (particle) {
      context.beginPath();
      context.strokeStyle = particle.color;
      context.lineWidth = 1;
      context.moveTo(particle.old.p.x, particle.old.p.y);
      context.lineTo(particle.p.x, particle.p.y);
      context.closePath();
      context.stroke();
    };

    return renderer;
  }

  const renderProton = () => {
    this.proton && this.proton.update();
  }

  return (
    <Canvas bg={bg}
        globalCompositeOperation="darker"
        onCanvasDidMount={onCanvasDidMount.bind(this)}
        onCanvasInited={onCanvasInited.bind(this)}
        onResize={onResize.bind(this)}
        //onMouseDown={onmousedown.bind(this)}
      />
  );
}

export default ParticleLines;

ParticleLines.defaultProps = defaultProps;