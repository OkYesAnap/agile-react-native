import { StyleSheet } from "react-native";

export default (styles = new StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    marginTop: 200
  },
  loginBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    borderRadius: 4,
    padding: 5,
    borderWidth: 0.5,
    borderColor: "#000"
  },
  inputText: {
    height: 30,
    width: 200,
    marginLeft: 5,
    paddingLeft: 4,
    borderColor: "gray",
    borderWidth: 1
  },
  listText: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#000"
  },
  listBlock: {
    flex: 1
  },
  menu: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#000",
    fontSize: 20
  }
}));
