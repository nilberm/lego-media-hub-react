import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ControlMenuContextData {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const ControlMenuContext = createContext({} as ControlMenuContextData);

export function ControlMenuProvider({ children }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ControlMenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </ControlMenuContext.Provider>
  );
}
