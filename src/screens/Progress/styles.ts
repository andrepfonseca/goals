import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 150,
    padding: 20,
  },
  title: {
    textAlign: "left",
  },
  percentage: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    color: "gray",
    marginTop: 10,
    fontFamily: "Courier New",
  },
  progressBar: {
    width: "100%",
    height: 10,
    marginTop: 5,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#000", // Cor de fundo da barra de progresso
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  addButton: {
    height: 45,
    width: 45,
    borderRadius: 25,
    color: "blue",
    backgroundColor: "#3690d9",
  },
});
