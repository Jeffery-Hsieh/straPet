import React, { createContext } from "react";
import volunteers from "./constant/volunteers";

const initialState = {
  volunteers: volunteers,
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
