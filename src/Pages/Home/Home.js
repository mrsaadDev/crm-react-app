import React from "react";
import MotionHoc from "../MotionHoc";

const HomeComponent = () => {
  return(
    <div>
      <h1>Asosiy</h1>
    </div>
  )
}

const Home = MotionHoc(HomeComponent);

export default Home;
