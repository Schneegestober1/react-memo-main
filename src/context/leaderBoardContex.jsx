import { createContext, useEffect, useState } from "react";
import { getLeaders } from "../api/leaders";
import { sortLeadersEl } from "../utils/helpers";

export const LeadersContext = createContext(null);

export const LeadersProvider = ({ children }) => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getLeaders().then(data => {
      const sortedLeaders = sortLeadersEl(data.leaders);
      setLeaders(sortedLeaders.slice(0, 9));
    });
  }, []);

  return <LeadersContext.Provider value={{ leaders, setLeaders }}>{children}</LeadersContext.Provider>;
};
