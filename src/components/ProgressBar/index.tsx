import { View } from "react-native";
import { styles } from "./styles";
import { Typography } from "components";

export type ProgressBarProps = {
  size: "medium" | "large";
  progress: string;
};

export const ProgressBar = ({ size, progress }: ProgressBarProps) => {
  return (
    <View>
      <Typography
        style={styles.percentage}
        variant={size === "medium" ? "subtitle" : "title"}
      >
        {progress}
      </Typography>
      <View
        style={
          size === "medium"
            ? styles.mediumProgressBarContainer
            : styles.progressBarContainer
        }
      >
        <View style={[styles.progress]}></View>
      </View>
    </View>
  );
};
