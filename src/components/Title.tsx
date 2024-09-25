import React, { ComponentPropsWithoutRef } from "react";

type TitlePropsTypes = {
  level: "h1" | "h2" | "h3" | "h4";
  otherProps: ComponentPropsWithoutRef<"h1">;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title = ({ level, children, otherProps }: TitlePropsTypes) => {
  const Heading = ({
    ...otherProps
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return React.createElement(level, otherProps, children);
  };

  return <Heading {...otherProps}>{children}</Heading>;
};

export default Title;
