import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: (
        <TouchableHighlight onPress={this.listMenu.bind(this)}>
          <Image style={styles.icons} source={require("../img/menu.png")} />
        </TouchableHighlight>
      )
    };
  }
  listMenu() {
    this.setState({
      menu: (
        <View>
          <Text style={styles.menu} onPress={Actions.hello}>
            Home
          </Text>
          <Text style={styles.menu} onPress={Actions.stackoverflow}>
            Stack Overflow
          </Text>
          <Text style={styles.menu} onPress={Actions.logout}>
            Logout
          </Text>
        </View>
      )
    });
  }
  render() {
    return <View>{this.state.menu}</View>;
  }
}
