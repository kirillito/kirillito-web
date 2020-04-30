import React from "react";
import RAFManager from "raf-manager";

type CanvasProps = { 
  bg: boolean,
  globalCompositeOperation: string,
  onCanvasDidMount: any,
  onCanvasInited: any,
  onResize: any,
  onMouseDown?: any
}

const Canvas = ({ bg=true, globalCompositeOperation, onCanvasDidMount, onCanvasInited, onResize, onMouseDown }: CanvasProps) => {
  var _id = null;
  var size = { width: 0, height: 0 };
  var canvasRef:any = React.createRef();

  const componentDidMount = () => {
    setTimeout(() => {
      initCanvas();
      this.resize = resize.bind(this);
      window.addEventListener("resize", resize);
    }, 100);
  
    const canvas = canvasRef.current;
    onCanvasDidMount && onCanvasDidMount(canvas);
  }
  
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (globalCompositeOperation) {
      const context = canvas.getContext("2d");
      context.globalCompositeOperation = globalCompositeOperation;
    }
  
    const { width, height } = setCanvasSize(canvas);
    heartbeatDetectionCanvasSize(canvas);
    onCanvasInited(canvas, width, height);
  }
  
  const heartbeatDetectionCanvasSize = (canvas) => {
    _id = setInterval(() => {
      if(canvasRef.current){
        const newHeight = canvasRef.current.clientHeight;
        if (newHeight !== size.height) {
          const { width, height } = setCanvasSize(canvas);
          onResize && onResize(width, height);
        }
      }
    }, 1000 / 10);
  }
  
  const componentWillUnmount = () => {
    try{
      window.removeEventListener("resize", resize);
      clearInterval(_id);
    }catch(e){
      
    }
  }
  
  const resize = () => {
    const canvas = canvasRef.current;
    const { width, height } = setCanvasSize(canvas);
    onResize && onResize(width, height);
  }
  
  const setCanvasSize = (canvas) => {
    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;
  
    size.width = width;
    size.height = height;
    canvas.width = width;
    canvas.height = height;
    return { width, height };
  }
  
  const handleWaypointEnter = () => {
    RAFManager.start();
  }
  
  const handleWaypointLeave = () => {
    RAFManager.stop();
  }
  
  const getStyle = () => {
    let style = { width: "100%", height: "100%" };
  
    if (bg) {
      style = Object.assign(style, {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0
      });
    }
    return style;
  }
  
  const handleMouseDown = (e) => {
    onMouseDown && onMouseDown(e);
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown.bind(this)}
      style={getStyle()}
      />
  );
}

export default Canvas;