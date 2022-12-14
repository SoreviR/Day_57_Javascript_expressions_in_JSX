import React from "react";
import ReactDOM from "react-dom";

const name = "SoreviR";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by SoreviR.
//Copyright 2022.
