import styled, { css } from "styled-components";

interface StyledButtonProps {
    variant: "add" | "edit" | "remove";
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) =>
        variant === "add" &&
        css`
      background-color: #fff;
      color: black;

      &:hover {
        background-color: rgb(231, 228, 219);
      }

      @media (max-width: 768px) {
      font-size: 12px;
      padding: 8px 16px;
    }
    `}

  ${({ variant }) =>
        variant === "edit" &&
        css`
      background-color:rgb(125, 188, 233);
      color: white;

      &:hover {
        background-color: #0077CC;
      }
    `}

    ${({ variant }) =>
        variant === "remove" &&
        css`
      background-color: rgb(176, 94, 95);
      color: white;

      &:hover {
        background-color: rgb(235, 101, 103);
      }
    `}
`;
