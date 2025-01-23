
import styled from "styled-components";

export const HeaderContainer = styled.header `
    background-color:rgb(230, 187, 162);
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.21);
    @media (max-width: 768px) {
       overflow-x: hidden;
    }
;`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
       padding: 0 10px;
    }
;`

export const InputsContainer = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
;`

export const Branding = styled.div`
    display: flex;      
    color:rgb(0, 0, 0);
    font-size: 40px;
    align-items: center;

`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 50px;
    margin-left: 10px;

    @media (max-width: 768px) {
        display: none; 
    }
;`

