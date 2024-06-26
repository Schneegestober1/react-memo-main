import { createContext, useEffect, useState } from "react";
import { getLeaders } from "../api/leaders";
import { sortLeadersEl } from "../utils/helpers";

export const LeadersContext = createContext(null);

export const LeadersProvider = ({ children }) => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getLeaders().then(leaders => {
      const sortedLeaders = sortLeadersEl(leaders.leaders);
      setLeaders(sortedLeaders.splice(1, 10));
      console.log(leaders.leaders);
    });
  }, []);

  return <LeadersContext.Provider value={{ leaders, setLeaders }}>{children}</LeadersContext.Provider>;
};
