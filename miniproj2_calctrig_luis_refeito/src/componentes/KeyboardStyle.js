import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#0000FF",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
    minHeight: 50,
    flex: 2,
  },
  buttonOther: {
    backgroundColor: "#b7d5ac",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
    minHeight: 40,
    flex: 2,
  },
  textButton: {
    color: "#E34253",
    fontSize: 15,
  },
});
