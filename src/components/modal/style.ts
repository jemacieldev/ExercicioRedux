import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  background-color:rgb(217, 217, 220);
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #EBF7FF;
  font-size: 16px;

  &:focus {
    outline-color: #394193;
  }
`;

export const ErrorInputMensage = styled.div`
color: red;
font-size: 16px;
margin-bottom: 10px;
`

export const ModalTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  color: rgb(121, 126, 173);
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;