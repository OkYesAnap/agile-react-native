import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Image,
  StatusBar
} from "react-native";
import Routes from "./src/Routes";
import styles from "./src/styles";
import newStore from "./src/store";
import reducer from "./src/reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import loadMiddleware from "./src/middleware";
const store = createStore(reducer, newStore, applyMiddleware(loadMiddleware));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
