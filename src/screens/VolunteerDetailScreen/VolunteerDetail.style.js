import { Dimensions } from "react-native";

const styles = (theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    textAlign: "center",
  },
  avatar: {
    flex: 1.5,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  info: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    width: 250,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    fontSize: 25,
    marginBottom: 20,
  },
  text: {
    color: "grey",
    fontSize: 15,
  },
  followBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#000000",
    marginBottom: 10,
  },
  followText: {
    color: "#fff",
  },
  messageBtn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 5,
  },
  map: {
    flex: 1.5,
    width: "100%",
    // height: 250,
    marginBottom: 20,
  },
});

export default styles;
