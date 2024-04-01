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
    backgroundColor: "white", // Cor de fundo do card
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84,
    elevation: 5, // Elevação para sombra no Android
  },
  image: {
    width: 100,
    height: "90%",
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
  },
  value: {
    textAlign: "left",
    marginTop: 10,
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
