import React, { useState } from "react";
import MotionHoc from "../MotionHoc";
import styled from "styled-components"
import { MahsulotlarModal } from "../../components/MahsulotlarModalComponent/MahsulotlarModal.components";

const DocumentsComponent = () => {
  const [show, setShow] = useState(false);
  const FlexBetweenContent = styled.div`
  display: flex;
  justify-content: space-between;
  `;
  const Btn = styled.button`
    border-radius: .5rem;
    background-image: linear-gradient(to right, #7474BF 0%, #348AC7 51%, #7474BF 100%);
    padding: 10px 15px;
    color: #fff;
    border: none;
    &:hover{
      cursor: pointer;
      background-position: right center;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      transition: ease .2s box-shadow;
    }
  `;

  return (
    <div>
        <h1>Mahsulotlar</h1>
        <FlexBetweenContent>
          <Btn onClick={()=>setShow(true)}>Kategoriyalar</Btn>
        </FlexBetweenContent>
        <MahsulotlarModal show={show} onClose={()=>setShow(false)}/>
        </div>
  );
};

const Mahsulotlar = MotionHoc(DocumentsComponent);

export default Mahsulotlar;
