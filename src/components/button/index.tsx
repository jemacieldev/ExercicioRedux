import React from "react";
import { StyledButton } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "add" | "edit" | "remove"; 
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "add", ...rest }) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};
