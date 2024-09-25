import React, { type FC, type HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ level, children, ...otherProps }) => {
  const Heading: FC<HTMLAttributes<HTMLElement>> = ({ ...otherProps }) => {
    return React.createElement(level, otherProps, children);
  };

  return <Heading {...otherProps}>{children}</Heading>;
};

export default Title;
