import React from "react";
import MotionHoc from "./MotionHoc";

const DocumentsComponent = () => {
  return <h1>Mahsulotlar</h1>;
};

const Mahsulotlar = MotionHoc(DocumentsComponent);

export default Mahsulotlar;
