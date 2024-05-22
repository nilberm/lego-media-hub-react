import { useState, useContext } from "react";
import { ControlMenuContext } from "../context/toggleMenuContext";

const useMenuControl = () => {
  const [isClosing, setIsClosing] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useContext(ControlMenuContext);

  const closeMenu = () => {
    setIsClosing(true);
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsClosing(false);
    }, 600);
  };

  return { isClosing, isMenuOpen, closeMenu };
};

export default useMenuControl;
