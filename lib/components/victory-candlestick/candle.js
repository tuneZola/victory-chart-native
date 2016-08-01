import React from "react";
import { Line, Rect } from "react-native-svg";
import { NativeHelpers } from "tune-victory-core-native";
import Candle from "tune-victory-chart/src/components/victory-candlestick/candle";

export default class extends Candle {
  renderWick(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Line {...props} {...nativeStyle}/>;
  }

  renderCandle(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Rect {...props} {...nativeStyle}/>;
  }
};
