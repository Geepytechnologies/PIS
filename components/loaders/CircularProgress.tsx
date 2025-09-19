import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  percentage: number; // Value between 0 and 100
  color: string; // Dynamic color for the progress
  label: string; // Text to display in the center
  size?: number; // Diameter of the circle
  strokeWidth?: number; // Thickness of the stroke
  backgroundColor?: string; // Color for the background circle
  duration?: number; // Animation duration in ms
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  color,
  label,
  size = 120,
  strokeWidth = 10,
  backgroundColor = "#e0e0e0",
  duration = 1000,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(percentage / 100, {
      duration,
      easing: Easing.ease,
    });
  }, [percentage, duration]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference * (1 - progress.value);
    return {
      strokeDashoffset,
    };
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          animatedProps={animatedProps}
          strokeLinecap="round"
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.percentageText}>{`${percentage.toFixed(1)}%`}</Text>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  percentageText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 14,
    color: "#666",
  },
});

export default CircularProgress;

// Usage example:
// <CircularProgress percentage={77.4} color="#00C853" label="Distributed" />
