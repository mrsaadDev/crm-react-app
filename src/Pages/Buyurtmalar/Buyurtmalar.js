import React, { useState } from "react";
import MotionHoc from "../MotionHoc";
import styled from "styled-components";
import { ModalBuyurtmalar } from "../../components/Modal_BuyurtmalarComponent/Modal_Buyurtmalar.component";

const CalenderComponent = () => {
  const [show, setShow] = useState(false);
  const FlexContentBorder = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
    border-bottom: 3px solid #666;
    border-radius: 3px;
    align-items: center;
    text-align: center;
  `;
  const Card = styled.div`
    border-radius: .65rem;
    box-shadow: 3px 4px 10px #333;
  `;
  const Mt2 = styled.div`
    margin: 0.5rem 0;
  `;
  const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const P2 = styled.div`
    padding: 1rem;
  `;
  const FlexBetweenContent = styled.div`
  display: flex;
  justify-content: space-between;
  `;
  const InputStyle = styled.input`
    border-radius: .5rem;
    padding: 10px;
    height: 100%;
    border: none;
    outline: none;
    width: 20%;
    margin: 1rem 0;
    &:focus{
      background-color: #eee;
      transition: ease .2s background-color;
    }
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
    <FlexBetweenContent>
    <h1>Buyurtmalar</h1>
    <InputStyle type="search" placeholder="🔍Lyuboy zakazizzi qidiring birad..." />
    </FlexBetweenContent>
    <Mt2>
    <Card>
      <FlexColumn>
        <P2>
        <FlexContentBorder>
          <h4>ID</h4>
          <h4>Sana</h4>
          <h4>Ism</h4>
          <h4>Telefon</h4>
          <h4>Soni</h4>
          <h4>Manzil</h4>
          <h4>Holat</h4>
          <h4>Ko'proq</h4>
        </FlexContentBorder>
        <FlexContentBorder>
            <h5>0001001</h5>
            <h5>05/06/2021</h5>
            <h5>Kimdir</h5>
            <h5>95 555 55 55</h5>
            <h5>ancha</h5>
            <h5>Qo'shnimiz</h5>
            <h5>Bilmadim</h5>
            <Btn onClick={()=>setShow(!show)}>3 ta nuqta</Btn>
        </FlexContentBorder>
        <ModalBuyurtmalar show={show} onClose={()=>setShow(false)} Btn={Btn}/>
        </P2>
      </FlexColumn>
    </Card>
    </Mt2>
  </div>
  )
};

const Buyurtmalar = MotionHoc(CalenderComponent);

export default Buyurtmalar;
