import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  height: 200px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const CardTitle = styled.p`
  font-size: 22px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TagColor = styled.span`
  color:rgb(121, 126, 173);
  font-size: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: end;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 30%;
    align-items: end;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const IconDelete = styled.div`
  color:rgb(176, 94, 95);
  font-size: 30px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color:rgb(235, 101, 103);
  }
`;

export const IconEdit = styled.div`
  color:rgb(182, 223, 203);
  font-size: 30px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color:rgb(85, 238, 164);
  }
`;
