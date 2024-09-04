import { StyleSheet } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Color.colorWhite,
      marginTop: 35,
    },
    textFlexBox: {
      textAlign: "center",
      left: 0,
    },
    textLayout: {
      height: 60,
      width: 45,
      position: "center",
    },
    contactLayout: {
      height: 9,
      width: 200, // Adjusted width to accommodate "CALL US: " + phone number
      fontSize: FontSize.size_7xs,
      top: 193,
      textAlign: "center",
      color: Color.colorBlack,
      fontFamily: FontFamily.roboto,
      lineHeight: 8,
      position: "absolute",
    },
    productNameLayout: {
      width: 155,
      position: "absolute",
    },
    addASubheading3: {
      left: 0,
      top: 0,
      position: "absolute",
      height: 203,
      width: 360,
    },
    logoIcon: {
      top: 8,
      left: 274,
      width: 35,
      height: 35,
      position: "absolute",
    },
    get10Off: {
      fontSize: 8,
      color: Color.colorBlack,
      lineHeight: 8,
      textAlign: "center",
      fontFamily: FontFamily.roboto,
      height: 31,
      width: 77,
      top: 0,
      position: "absolute",
    },
    promotext: {
      top: 94,
      left: 206,
      height: 31,
      width: 77,
      position: "absolute",
    },
    cdsTemplate1Child: {
      top: 123,
      left: 210,
      borderRadius: 14,
      backgroundColor: "#917462",
      width: 58,
      height: 37,
      position: "absolute",
    },
    text: {
      fontSize: 15,
      lineHeight: 15,
      fontFamily: FontFamily.roboto,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      left: 4,
      top: 4,
    },
    price: {
      top: 131,
      left: 213,
    },
    productImageIcon: {
      top: 45,
      left: 37,
      width: 167,
      height: 136,
      position: "absolute",
    },
    contact: {
      left: -12,
    },
    website: {
      left: 114,
    },
    productNameChild: {
      left: 7,
      backgroundColor: "rgba(255, 255, 255, 0)",
      width: 119,
      height: 28,
      top: 0,
      position: "absolute",
    },
    thePowerWithin: {
      top: 9,
      fontSize: 14,
      fontFamily: FontFamily.roboto,
      height: 21,
      textAlign: "center",
      left: 0,
      color: Color.colorBlack,
      lineHeight: 15,
      width: 159,
    },
    productName: {
      top: 58,
      left: 194,
      height: 30,
    },
    cdsTemplate1: {
      height: 203,
      width: 360,
    },
  });
  export default styles;