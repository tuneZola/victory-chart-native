import React from "react";
import { Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "tune-victory-core-native";
import { VictoryScatter } from "tune-victory-chart/src";
import Point from "./point";

export default class extends VictoryScatter {
  static defaultProps = {
    ...VictoryScatter.defaultProps,
    dataComponent: <Point/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
