import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "tune-victory-core-native";
import { VictoryAxis }  from "tune-victory-chart/src";
import AxisLine from "./axis-line";

export default class extends VictoryAxis {
  static defaultProps = {
    ...VictoryAxis.defaultProps,
    axisComponent: <AxisLine/>,
    axisLabelComponent: <VictoryLabel/>,
    tickLabelComponent: <VictoryLabel/>,
    tickComponent: <AxisLine/>,
    gridComponent: <AxisLine/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
