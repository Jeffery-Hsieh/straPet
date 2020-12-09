import uuid from "react-native-uuid";
import React, { createContext } from "react";
import volunteers from "./constant/volunteers";

// TODO: Chat firestore
const initialState = {
  userId: uuid.v1(),
  authenticated: false,
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
