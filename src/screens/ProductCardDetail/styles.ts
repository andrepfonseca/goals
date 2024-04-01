import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerContainer: {
    display: "flex",
    padding: 20,
  },
  content: {
    flex: 1,
    display: "flex",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    textAlign: "left",
    marginTop: 10,
  },
  detailContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  infoContainer: {
    flex: 1,
  },
  valueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 30,
    display: "flex",
  },
  progressBar: {
    width: "100%",
    height: 20,
    marginTop: 5,
    borderRadius: 8,
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
  editContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  addButton: {
    backgroundColor: "#75975e",
  },
  removeButton: {
    backgroundColor: "#f94449",
  },
});
