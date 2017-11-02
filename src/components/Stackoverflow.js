import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Menu from "./Menu";
import { connect } from "react-redux";
import { STACK_OVERFLOW_DATA } from "../actions/types";

class Stackoverflow extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    return (
      <View style={styles.listBlock}>
        <Menu />
        <ScrollView>
          {this.props.data.map((val, i) => (
            <TouchableOpacity key={i} onPress={() => Linking.openURL(val.link)}>
              <Text key={i} style={styles.listText}>
                {val.title ? val.title : val}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default connect(
  state => ({
    data: state.stackOverflowData
  }),
  dispatch => ({
    onLoad: () =>
      dispatch({
        type: "STACK_OVERFLOW_DATA"
      })
  })
)(Stackoverflow);
