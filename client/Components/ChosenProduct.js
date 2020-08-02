import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ChosenProduct = ({ item }) => {
  console.log(item);
  return (
    <View>
      <Image style={styles.boxImage} source={item.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: 45,
    height: 45,
  },
});

export default ChosenProduct;
