import React from 'react'
import styled,{ keyframes } from "styled-components";

export const ModalBuyurtmalar = (props)=>{
    if(!props.show){return null}
    const FadeIn = keyframes`
    0%{opacity:0;}
    100%{opacity:1;}
    `;
    const Modal = styled.div`
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        animation-name: ${FadeIn};
        animation-duration: .5s;
    `;
    const ModalContent = styled.div`
        width: 500px;
        background-color: rgba(137, 171, 245, 0.37);
        border-radius: .5rem;
    `;
    const ModalBody = styled.div`
        padding: 1rem;
    `;
    const BtnDanger = styled.button`
    border-radius: .5rem;
    background: #ed1b24;
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
    const Flex = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    return(
        <Modal onClick={props.onClose}>
            <ModalContent onClick={e=>e.stopPropagation()}>
            <ModalBody>
                <Flex>
            <props.Btn onClick={props.onClose}>O'zgartirish</props.Btn>
            <BtnDanger onClick={props.onClose}>O'chirish</BtnDanger>
            </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
    )
}