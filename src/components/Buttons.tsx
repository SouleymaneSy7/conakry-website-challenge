import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonPropsType = {
  children: ReactNode;
  type: "button" | "submit";
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, type, ...props }: ButtonPropsType) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
