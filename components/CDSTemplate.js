import React, { useState, useEffect, useRef } from "react";
import { Image } from "expo-image";
import { Text, TextInput, View, StyleSheet, Pressable, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import ViewShot from 'react-native-view-shot';
import formStyles from "./Template2.styles"; // Assuming you have styles for forms and buttons

const loadTemplate = async (templateName) => {
  switch (templateName) {
    case 'T1':
      return require('./T4a').default;
    case 'T2':
      return require('./T4b').default;
    case 'T3':
      return require('./T4c').default;
    default:
      return require('./T4a').default;
  }
};

const CDSTemplate = () => {
  const viewShotRef = useRef();

  const [currentTemplate, setCurrentTemplate] = useState('T1');
  const [styles, setStyles] = useState({});
  
  useEffect(() => {
    const loadStyles = async () => {
      const selectedTemplateStyles = await loadTemplate(currentTemplate);
      setStyles(StyleSheet.create(selectedTemplateStyles));
    };
    loadStyles();
  }, [currentTemplate]);

  const [productName, setProductName] = useState("The Power Within");
  const [price, setPrice] = useState("₱379");
  const [promoText, setPromoText] = useState("Get 10% off your next purchase of selected categories");
  const [phoneNumber, setPhoneNumber] = useState("1549221014");
  const [website, setWebsite] = useState("www.RNPAICA.com");
  const [productImage, setProductImage] = useState(require("../assets/product-image.png"));
  const [logoImage, setLogoImage] = useState(require("../assets/logo.png"));

  const pickImage = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri });
    }
  };

  const saveAd = async () => {
    const uri = await viewShotRef.current.capture();
    // Save or navigate with the captured image URI as needed
  };

  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }}>
        <View style={styles.cdsTemplate1}>
          <Image style={styles.addASubheading3} contentFit="cover" source={require("../assets/add-a-subheading-3.png")} />
          <Image style={styles.logoIcon} contentFit="cover" source={logoImage} />
          <View style={styles.promotext}>
            <Text style={[styles.get10Off, styles.textFlexBox]}>{promoText}</Text>
          </View>
          <View style={styles.cdsTemplate1Child} />
          <View style={[styles.price, styles.textLayout]}>
            <Text style={[styles.text, styles.textLayout]}>{price}</Text>
          </View>
          <Image style={styles.productImageIcon} contentFit="cover" source={productImage} />
          <Text style={[styles.contact, styles.contactLayout]}>CALL US: +63 {phoneNumber}</Text>
          <Text style={[styles.website, styles.contactLayout]}>{website}</Text>
          <View style={[styles.productName, styles.productNameLayout]}>
            <View style={styles.productNameChild} />
            <Text style={[styles.thePowerWithin, styles.productNameLayout]}>{productName}</Text>
          </View>
        </View>
      </ViewShot>

      <View style={formStyles.cardContainer}>
        <View style={formStyles.card}>
          <ScrollView 
            style={formStyles.form} 
            contentContainerStyle={formStyles.scrollContent}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Pressable style={formStyles.button} onPress={() => setCurrentTemplate('T1')}>
              <Text style={formStyles.buttonText}>Select Template 1</Text>
            </Pressable>
            <Pressable style={formStyles.button} onPress={() => setCurrentTemplate('T2')}>
              <Text style={formStyles.buttonText}>Select Template 2</Text>
            </Pressable>
            <Pressable style={formStyles.button} onPress={() => setCurrentTemplate('T3')}>
              <Text style={formStyles.buttonText}>Select Template 3</Text>
            </Pressable>
            <Pressable style={formStyles.buttonImage} onPress={() => pickImage(setProductImage)}>
              <Text style={formStyles.buttonText}>Change Product Image</Text>
            </Pressable>

            {/* Form fields for Text Inputs */}
            <Text style={formStyles.label}>Product Name</Text>
            <TextInput
              style={formStyles.input}
              placeholder="Product Name"
              value={productName}
              onChangeText={setProductName}
            />
            <Text style={formStyles.label}>Price</Text>
            <TextInput
              style={formStyles.input}
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
            />
            <Text style={formStyles.label}>Promo</Text>
            <TextInput
              style={formStyles.input}
              placeholder="Promo Text"
              value={promoText}
              onChangeText={setPromoText}
            />
            <Text style={formStyles.label}>Phone Number</Text>
            <TextInput
              style={formStyles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Text style={formStyles.label}>Website</Text>
            <TextInput
              style={formStyles.input}
              placeholder="Website"
              value={website}
              onChangeText={setWebsite}
            />
            <Pressable style={[formStyles.button, { marginTop: 20 }]} onPress={saveAd}>
              <Text style={formStyles.buttonText}>Save and Capture Ad</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CDSTemplate;
