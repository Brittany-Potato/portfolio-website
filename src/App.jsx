import React from "react";
import Topcontainer from "./components/top-container/top-container.jsx";
import Secondcontainer from "./components/second-container/second-container.jsx";
import CardOne from "./components/Cards/cardOne.jsx";

export default function App() {
  return (
    <div>
      <Topcontainer />
      <Secondcontainer />
      <CardOne/>
    </div>
  );
}
