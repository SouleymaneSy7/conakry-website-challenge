import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerTypes<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerTypes<C>) {
  const Component = as || "div";
  return <Component {...props}>{children} </Component>;
}

export default Container;
