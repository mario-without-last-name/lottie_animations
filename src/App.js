import React from 'react';
import Lottie from 'lottie-react';
import './App.css';
import animation1 from "./lottieAnimation1.json"
import animation2 from "./lottieAnimation2.json"
import animation3 from "./lottieAnimation3.json"
import animation4 from "./lottieAnimation4.json"
import animation5 from "./lottieAnimation5.json"
import animation6 from "./lottieAnimation6.json"


function App() {

  return (
    <div className="App">
      <h1>React Lottie Demo</h1>
      <h2>Beautiful, easily customizable animations, ready to use</h2>
      <div className="marqueeSection">
        <div className="gradientLeft" />
        <div className="gradientRight" />
        <div className="marquee">
          <Lottie style={{ width: "300px" }} animationData={animation1}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation2}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation3}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation4}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation5}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation6}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation1}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation2}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation3}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation4}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation5}></Lottie>
          <Lottie style={{ width: "300px" }} animationData={animation6}></Lottie>
        </div>
      </div>
      <h2>Find more <a href="https://lottiefiles.com/"><u>here</u></a>!</h2>
    </div>
  );
}

export default App;
