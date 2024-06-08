import { createContext, useState } from "react";

export const AddLivesContext = createContext(null);

export const LivesProvider = ({ children }) => {
  const [lives, setLives] = useState(3);

  return <AddLivesContext.Provider value={{ lives, setLives }}>{children}</AddLivesContext.Provider>;
};
