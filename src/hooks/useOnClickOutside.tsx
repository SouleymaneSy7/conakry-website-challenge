import React from "react";

const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void => {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
