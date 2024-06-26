import React, { useEffect } from "react";

const useOutSideClick = (ref, handler) => {
  useEffect(() => {
    function listner(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [handler, ref]);
};

export default useOutSideClick;
