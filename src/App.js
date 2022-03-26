import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { ColorPicker, hslToRgb } from "@shopify/polaris";
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
    hue: 120,
    brightness: 1,
    saturation: 1,
    alpha: 0.7
  });
  function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  //return <ColorPicker onChange={setColor} color={color} allowAlpha />;

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      <input type="text" onChange={getData} />
      <ColorPicker onChange={(e) => setColor(e)} color={color} allowAlpha />;
      <h1
        className="PrintData1"
        style={{
          color: hslToHex(
            color.hue,
            color.saturation * 100,
            color.brightness * 100
          )
        }}
      >
        {" "}
        {data}
      </h1>
    </div>
  );
}

export default App;
