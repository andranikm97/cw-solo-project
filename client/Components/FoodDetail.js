import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodDetail = ({ item }) => {
  return (
    <View style={card.container}>
      <View>
        <View>
          <Text>Image</Text>
        </View>
        <View style={top.details}>
          <Text>Details</Text>
        </View>
      </View>

      <View>
        <View style={bottom.productName}>
          <Text>Name</Text>
        </View>
        <View style={bottom.currentQuantity}>
          <Text>Quantity Selected</Text>
        </View>
      </View>
    </View>
  );
};

const card = StyleSheet.create({
  container: {
    flex: 1,
    width: 'auto',
    height: 200,
    marginVertical: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
const top = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  },
});
const bottom = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default FoodDetail;
