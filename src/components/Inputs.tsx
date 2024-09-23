import { type ComponentPropsWithoutRef } from "react";

type InputsProps = {
  id?: string;
  label?: string;
  type: "text" | "email";
} & ComponentPropsWithoutRef<"input">;

const Inputs = ({ label, id, type, ...otherProps }: InputsProps) => {
  if (!label) {
    return (
      <div>
        <input id={id} type={type} {...otherProps} />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...otherProps} />
    </div>
  );
};

export default Inputs;
