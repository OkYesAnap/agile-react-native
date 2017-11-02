import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Hello from "./components/Hello";
import Stackoverflow from "./components/Stackoverflow";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="hello" component={Hello} title="Home" />
          <Scene
            key="stackoverflow"
            component={Stackoverflow}
            title="Stack Overflow"
          />
          <Scene key="logout" component={Logout} title="Logging Out" />
        </Stack>
      </Router>
    );
  }
}
