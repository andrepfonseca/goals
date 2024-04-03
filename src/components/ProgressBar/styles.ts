import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 20,
    marginTop: 5,
    borderRadius: 9,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#D3FA3A",
    padding: 2,
  },
  mediumProgressBarContainer: {
    width: "100%",
    height: 12,
    marginTop: 5,
    borderRadius: 9,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#D3FA3A",
    padding: 2,
  },
  progress: {
    backgroundColor: "#D3FA3A",
    minWidth: "0%",
    maxWidth: "100%",
    height: "100%",
    borderRadius: 9,
  },
  percentage: {
    fontWeight: "bold",
    textAlign: "right",
    color: "#fff",
  },
});
