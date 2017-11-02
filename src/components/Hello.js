import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import Menu from "./Menu";
import { connect } from "react-redux";

class Hello extends React.Component {
  render() {
    return (
      <View>
        <Menu />
        <View style={styles.container}>
          <Text>HELLO, {this.props.usName}</Text>
        </View>
      </View>
    );
  }
}
export default connect(state => ({
  usName: state.name
}))(Hello);
