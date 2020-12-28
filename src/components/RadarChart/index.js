import React, { useMemo } from "react";
import { View } from "react-native";
import Svg, { Line, Polygon, Text } from "react-native-svg";
import _ from "lodash";

const labels = [
  "Extraverted",
  "Friendly",
  "Energetic",
  "Self Control",
  "Size",
  "Appetite",
];

const svgY = (degrees) => degrees + 180;

const degToRadians = (degree) => (Math.PI * degree) / 180;

const calculateEdgePointFn = (center, radius) => (degree, scale = 1) => {
  const degreeInRadians = degToRadians(degree);
  const degreeInRadiansY = degToRadians(svgY(degree));
  return [
    center + Math.cos(degreeInRadians) * radius * scale,
    center + Math.sin(degreeInRadiansY) * radius * scale,
  ];
};

export default ({ data }) => {
  const viewBoxSize = 120;
  const viewBoxCenter = viewBoxSize * 0.5;
  const radius = viewBoxSize * 0.4;

  const calculateEdgePoint = useMemo(
    () => calculateEdgePointFn(viewBoxCenter, radius),
    [radius]
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg
        height="100%"
        width="100%"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        {labels.map((label, i) => {
          const edgePoint = calculateEdgePoint(30 + i * 60, 1);
          return (
            <Text
              stoke="black"
              x={edgePoint[1]}
              y={edgePoint[0]}
              fontSize="20"
              fill="none"
              textAnchor="middle"
            >
              {label}
            </Text>
          );
        })}

        <Text
          fill="none"
          stroke="purple"
          fontSize="20"
          fontWeight="bold"
          x="100"
          y="20"
          textAnchor="middle"
        >
          STROKED TEXT
        </Text>

        {[40, 70, 100].map((r) => (
          <Polygon
            key={`radarOutline_${r}`}
            stroke="black"
            strokeOpacity="0.2"
            strokeWidth={1.2}
            fillOpacity={0.5}
            points={`${_.times(6).map((x, i) => {
              const edgePoint = calculateEdgePoint(30 + i * 60, r / 100);
              return `${edgePoint[0]},${edgePoint[1]}`;
            })}`}
          />
        ))}

        {_.times(3).map((i) => (
          <Line
            key={`crosshair_${i}`}
            x1={calculateEdgePoint(30 + i * 60)[0]}
            y1={calculateEdgePoint(30 + i * 60)[1]}
            x2={calculateEdgePoint(30 + i * 60 + 180)[0]}
            y2={calculateEdgePoint(30 + i * 60 + 180)[1]}
            stroke="black"
            strokeOpacity="0.2"
            strokeWidth="0.5"
            fill="transparent"
          />
        ))}

        <Polygon
          stroke={"#50E2C2"}
          strokeWidth={1.2}
          fill={"#50E2C2"}
          fillOpacity={0.5}
          points={`${data.map((value, i) => {
            const edgePoint = calculateEdgePoint(30 + i * 60, value / 100);
            return `${edgePoint[0]},${edgePoint[1]}`;
          })}`}
        />
      </Svg>
    </View>
  );
};
