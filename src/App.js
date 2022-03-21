import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { ColorPicker } from "@shopify/polaris";
/*import './App.css';
export default function ColorPickerWithTransparentValueExample() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  return <ColorPicker onChange={setColor} color={color} allowAlpha />;
}
*/
/*
function ColorPickerWithTransparentValueExample() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  return <ColorPicker onChange={setColor} color={color} allowAlpha />;
}*/

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState();
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7
  });

  //return <ColorPicker onChange={setColor} color={color} allowAlpha />;

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      <input type="text" onChange={getData} />

      <ColorPicker
        className={"App"}
        onChange={setColor}
        color={color}
        allowAlpha
      />
      <h1 className="PrintData1" style={{ color: { setColor } }}>
        {" "}
        {data}
      </h1>
    </div>
  );
}

export default App;
