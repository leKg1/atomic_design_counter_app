import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};
