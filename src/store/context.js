import React, { createContext, useState } from "react";
import volunteers from "./constant/volunteers";
import animals from "./constant/animals";
import firebase from "../services/firebase";

// TODO: Chat firestore
const initialState = {
  userId: "Zk18OTDq8N1Ly9YtEle3",
  authenticated: false,
  firebase: firebase,
  volunteers: volunteers,
  animals: animals,
};

const SessionContext = createContext(initialState);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(initialState);

  return (
    <SessionContext.Provider value={[session, setSession]}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
