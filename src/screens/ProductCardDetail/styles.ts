import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    padding: 10,
  },
  goBackButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
    paddingBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    height: "100%",
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    textAlign: "left",
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
    color: "#fff",
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginTop: 10,
    display: "flex",
  },
  editContainer: {
    marginVertical: 20,
  },
  buttonsContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#D3FA3A",
  },
  removeButton: {
    backgroundColor: "#f94449",
  },
  whiteText: {
    color: "#fff",
  },
  editImage: {
    position: "absolute",
    bottom: 10,
    right: 50,
    backgroundColor: "#bbbb",
  },
});
