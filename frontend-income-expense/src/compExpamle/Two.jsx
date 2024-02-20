import React from "react";
import { useContext } from "react";
import { NameText } from "./MainProv.js";
import Three from "./Three";
import { ColorContext } from "./ColorProv.jsx";

export default function Two() {
  const { text, setText } = useContext(NameText);
  const { color, setColor } = useContext(ColorContext);

  const handle = () => {
    setColor("red");
  };

  return (
    <div>
      <Three />
      <div style={{ color: color }}>{text}</div>
      <button onClick={() => handle()}>click</button>
    </div>
  );
}
