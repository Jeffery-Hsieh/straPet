import React, { createContext } from "react";
import volunteers from "./constant/volunteers";
import animals from "./constant/animals";

const initialState = {
  volunteers: volunteers,
  animals: animals,
};

const SessionContext = createContext(initialState);

export const SessionProvider = ({ children }) => {
  return (
    <SessionContext.Provider value={initialState}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
