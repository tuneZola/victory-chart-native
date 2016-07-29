import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "tune-victory-core";
import Point from "victory-chart/src/components/victory-scatter/point";

export default class extends Point {
  renderPoint(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Path d={path} {...nativeStyle} {...events}/>;
  }
}
