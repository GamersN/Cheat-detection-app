import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FPS Cheat Detector</Text>
      <Button title="Pick Screenshot" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <Text style={styles.result}>Detection: [Mocked] No snap detected.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20
  },
  title: {
    fontSize: 22, marginBottom: 20
  },
  image: {
    width: 300, height: 300, marginTop: 20
  },
  result: {
    marginTop: 20, fontSize: 16
  }
});
