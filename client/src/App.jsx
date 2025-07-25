import { useState, useRef, useEffect, createContext } from "react";
import Menu from "./component/Menu";
const App = () => {
  const canvaRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [lineWidth, setLinewidth] = useState(5);

  //When Component mount for the first time
  useEffect(() => {
    const canvas = canvaRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = lineOpacity;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  //Function for starting the drawing
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };
  //Function to end drawing
  const endDrawing = (e) => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };
  //Function to draw
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };
  return (
    <div className="App">
      <h1>Paint App</h1>
      <div className="draw-area">
        <Menu
          setLineColor={setLineColor}
          setLineOpacity ={setLineOpacity}
          setLinewidth={setLinewidth}
        />
          <canvas 
         onMouseDown ={startDrawing}
         onMouseUp = {endDrawing}
         onMouseMove = {draw}
         ref={canvaRef}
         width={`1280px`}
         height={`720px`}
          />
      
      </div>
    </div>
  );
}
export default App;

