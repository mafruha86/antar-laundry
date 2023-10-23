import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah Second Screen</Text>
      <Button
        title="Kembali ke Halaman Utama"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default SecondScreen;