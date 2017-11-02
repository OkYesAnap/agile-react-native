import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import Menu from "./Menu";
import { connect } from "react-redux";
import { LOGOUT } from "../actions/types";
class Logout extends React.Component {
  logout() {
    this.props.onLogout();
    Actions.login();
  }
  render() {
    return (
      <View>
        <Menu />
        <View style={styles.container}>
          <Text>{this.props.usName} ,Do you want Logout?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.logout.bind(this)}
          >
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(
  state => ({
    usName: state.name
  }),
  dispatch => ({ onLogout: () => dispatch({ type: LOGOUT }) })
)(Logout);
