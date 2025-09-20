import React from "react";
import Topcontainer from "./components/top-container/top-container.jsx";
import Secondcontainer from "./components/second-container/second-container.jsx";
import CardOne from "./components/Cards/cardOne.jsx";
import CardTwo from "./components/Cards/cardTwo.jsx";
import CardThree from "./components/Cards/cardThree.jsx";

import styles from "./app.module.css"

export default function App() {
  return (
    <div>
      <Topcontainer />
      <Secondcontainer />
      <CardOne/>
      <CardTwo/>
      <CardThree/>
    </div>
  );
}
