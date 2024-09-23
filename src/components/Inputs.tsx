import { type ComponentPropsWithoutRef } from "react";

type InputsProps = {
  id: string;
  label: string;
  inputType: "text" | "email";
} & ComponentPropsWithoutRef<"input">;

const Inputs = ({ label, id, inputType, ...otherProps }: InputsProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={inputType} {...otherProps} />
    </div>
  );
};

export default Inputs;
