import { createContext, useState } from "react";

export const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
};
