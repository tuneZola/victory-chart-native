import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryErrorBar } from "tune-victory-chart/src";
import ErrorBar from "./errorbar";
import { VictoryContainer } from "tune-victory-core-native";

export default class extends VictoryErrorBar {
  static defaultProps = {
    ...VictoryErrorBar.defaultProps,
    dataComponent: <ErrorBar/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
