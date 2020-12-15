import React, { useContext } from "react";
import { View, Button } from "react-native";
import SessionContext from "../../store/context";
import { IconButton } from "react-native-paper";

const Home = () => {
  const [session, setSession] = useContext(SessionContext);

  const changeUser = (userId) => {
    setSession({
      ...session,
      userId: userId,
    });
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Normal user"
          onPress={() => changeUser("Zk18OTDq8N1Ly9YtEle3")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Shleter Manager"
          onPress={() => changeUser("EpXW3zdl3S3tKp9gFKe4")}
        />
      </View>
    </>
  );
};

export default Home;
