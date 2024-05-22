import { useState, useContext } from "react";
import { ControlMenuContext } from "../context/toggleMenuContext";

const useHeaderControl = () => {
  const [isHoveredMenu, setIsHoveredMenu] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useContext(ControlMenuContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = () => setIsHoveredMenu(true);
  const handleMouseLeave = () => setIsHoveredMenu(false);

  return {
    isHoveredMenu,
    isMenuOpen,
    toggleMenu,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHeaderControl;
