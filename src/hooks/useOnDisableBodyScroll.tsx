import React from "react";

const useOnDisableBodyScroll = (isOpen: boolean) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
};

export default useOnDisableBodyScroll;
