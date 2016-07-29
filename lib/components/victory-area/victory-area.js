import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "tune-victory-core";
import { VictoryArea } from "tune-victory-chart/src";
import Area from "./area";

export default class extends VictoryArea {
  static defaultProps = {
    ...VictoryArea.defaultProps,
    dataComponent: <Area/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}
