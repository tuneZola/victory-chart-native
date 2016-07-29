import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryContainer } from "tune-victory-core";
import { VictoryGroup } from "tune-victory-chart/src";

export default class extends VictoryGroup {
  static defaultProps = {
    ...VictoryGroup.defaultProps,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
