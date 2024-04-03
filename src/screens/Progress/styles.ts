import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B1B1B",
  },
  header: {
    width: "100%",
    height: 150,
    padding: 20,
  },
  title: {
    textAlign: "left",
    color: "#fff",
    marginBottom: 10,
  },
  percentage: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    color: "gray",
    marginTop: 10,
    fontFamily: "Courier New",
  },
  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  separator: {
    height: 20,
  },
  subTitle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  addButton: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: "#D3FA3A",
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 400,
  },
  emptyText: {
    color: "#fff",
  },
});
