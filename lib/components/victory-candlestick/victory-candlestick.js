import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer } from "tune-victory-core-native";
import { VictoryCandlestick } from "tune-victory-chart/src";
import Candle from "./candle";

export default class extends VictoryCandlestick {
  static defaultProps = {
    ...VictoryCandlestick.defaultProps,
    dataComponent: <Candle/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }
}
