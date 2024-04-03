import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 175,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
    backgroundColor: "#262626",
    elevation: 100, // Elevação para sombra no Android
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  info: {
    height: "100%",
    width: "60%",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    textAlign: "left",
    marginTop: 10,
    color: "#fff",
  },
  valueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  valueTitle: {
    textAlign: "left",
    marginTop: 10,
    color: "#fff",
  },
  value: {
    textAlign: "left",
    marginTop: 10,
    color: "#fff",
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginTop: 5,
  },
  cardProgress: {
    marginBottom: 15,
  },
  cardPercentage: {
    textAlign: "right",
    color: "gray",
    marginTop: 10,
  },
});
