import { StyleSheet } from "react-native";
const formStyles = StyleSheet.create({
  form: {
    padding: 15,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:0,
    width: '90%',
  },
  card: {
    width: '100%',
    maxHeight: '80%', // Adjust this value as needed
    top: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonGroup: {
    justifyContent: "space-around",
    marginBottom: 20,
    flexDirection: "row",
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    marginBottom: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  save: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: "#000",
    marginBottom: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonImage: {
    margin: 10,
    padding: 15,
    backgroundColor: '#4CAF50', // Green background
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonLogo: {
    margin: 10,
    padding: 15,
    backgroundColor: '#2196F3', // Blue background
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default formStyles;