import React from "react";
import { ENTER_NAME, ENTER_PASS, LOGIN } from "../actions/types";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
class Login extends React.Component {
  login() {
    Actions.hello();
  }
  enterName(e) {
    this.props.onEnterName(e);
    console.log(this.props.name);
  }
  enterPass(e) {
    this.props.onEnterPass(e);
    console.log(this.props.pass);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>WELCOME TO AGILE TEST</Text>
        <View style={styles.loginBlock}>
          <Image style={styles.icons} source={require("../img/user_ico.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="Input Name"
            underlineColorAndroid={"transparent"}
            onChangeText={this.enterName.bind(this)}
          />
        </View>
        <View style={styles.loginBlock}>
          <Image style={styles.icons} source={require("../img/pass_ico.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="Input Password"
            underlineColorAndroid={"transparent"}
            onChangeText={this.enterPass.bind(this)}
          />
        </View>
        <View style={styles.loginBlock}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.login.bind(this)}
          >
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(
  state => ({
    name: state.name,
    pass: state.pass
  }),
  dispatch => ({
    onEnterName: name => {
      dispatch({ type: ENTER_NAME, name: name });
    },
    onEnterPass: pass => {
      dispatch({ type: ENTER_PASS, pass: pass });
    }
  })
)(Login);
