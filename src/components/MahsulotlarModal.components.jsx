import styled,{ keyframes } from "styled-components";

export const MahsulotlarModal = (props)=>{
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
        width: 80vw;
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
    const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
const style = {margin: "10px 0"};
    return(
        <Modal onClick={props.onClose}>
            <ModalContent onClick={e=>e.stopPropagation()}>
            <ModalBody>
                <Flex>
                <h2>Sutli Mahsulotlar</h2>
            </Flex>
            <Flex>
                <FlexColumn>
                <h5 style={style}>Sut</h5>
                <h5 style={style}>Qatiq</h5>
                <BtnDanger>O'chirish</BtnDanger>
                </FlexColumn>
            </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
    )
}