const styles = (theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 15,
  },
  info: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text: {
    color: "grey",
    fontSize: 12,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  btns: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  followBtn: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#000000",
  },
  messageBtn: {
    flex: 1,
    borderWidth: 4,
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "#fff",
  },
});

export default styles;
