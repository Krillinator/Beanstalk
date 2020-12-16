import React from "react";
import { Image } from "react-native-elements";

function LogoTitle() {
  const logo = require("../assets/favicon.png");
  return <Image style={{ width: 50, height: 50 }} source={logo} />;
}

export default LogoTitle;
