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
  priceChildPosition: {
    left: 0,
    top: 0,
  },
  get10OffPosition: {
    color: Color.colorBlack,
    lineHeight: 8,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  priceLayout: {
    height: 37,
    width: 58,
    position: "absolute",
  },
  contactLayout: {
    height: 9,
    width: 109,
    fontSize: FontSize.size_7xs,
    top: 193,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jomolhari,
    lineHeight: 8,
    position: "absolute",
  },
  productNameLayout: {
    height: 21,
    width: 152,
    position: "absolute",
  },
  addASubheading3: {
    position: "absolute",
    height: 203,
    width: 360,
  },
  logoIcon: {
    top: 139,
    left: 252,
    width: 35,
    height: 35,
    position: "absolute",
  },
  get10Off: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: FontFamily.jomolhari,
    color: Color.colorBlack,
    lineHeight: 8,
    height: 41,
    width: 106,
    position: "absolute",
  },
  promotext: {
    top: 60,
    left: 216,
    height: 41,
    width: 106,
    position: "absolute",
  },
  priceChild: {
    borderRadius: 14,
    backgroundColor: "#917462",
    left: 0,
    top: 0,
  },
  text: {
    top: 8,
    left: 3,
    fontSize: 20,
    lineHeight: 10,
    fontFamily: FontFamily.judson,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 53,
    height: 20,
    textAlign: "center",
    position: "absolute",
  },
  price: {
    top: 95,
    left: 240,
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
  thePowerWithin: {
    fontSize: 14,
    fontFamily: FontFamily.pTSerifCaption,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 8,
    left: 0,
    top: 0,
    height: 21,
    width: 152,
  },
  productName: {
    top: 21,
    left: 97,
  },
  cdsTemplate1Layout: {
    height: 203,
    width: 360,
  },
});
  export default styles;