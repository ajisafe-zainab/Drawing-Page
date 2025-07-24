import {useState,useRef,useEffect} from 'react'

const App = () => {
  const canvaRef = useRef(null);
  const ctxRef = useRef(null);
  const[isDrawing,setIsDrawing] = useState(false);
  const[lineColor,setLineColor] = useState('black');
  const[lineOpacity,setLineOpacity] = useState(0.1);
  const[lineWidth,setLinewidth] = useState(5);


  //When Component mount for the first time
  useEffect(()=>{
   const canvas = canvaRef.current;
   const ctx = canvas.getContext("2d");
   ctx.lineCap = 'round';
   ctx.lineJoin = "round";
   ctx.globalAlpha = lineColor;
   ctx.styleStroke = lineOpacity;
   ctx.lineWidth = lineWidth;
  },[lineColor,lineOpacity,lineWidth]);

  //Function for starting the drawing
  const startDrawing = (e) =>{
    ctx.current.beginPath();
    ctx.current.moveTo(
      e.nativeEvent.offsetX(),
      e.nativeEvent.offsetY(),
    );
    setIsDrawing(true);
  }

  return (
    <div>
      
    </div>
  )
}

export default App
