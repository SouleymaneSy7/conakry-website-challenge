import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type FormPropsType = ComponentPropsWithoutRef<"form"> & {
  children: ReactNode;
};

const Forms = ({ children, ...otherProps }: FormPropsType) => {
  return <form {...otherProps}>{children}</form>;
};

export default Forms;
