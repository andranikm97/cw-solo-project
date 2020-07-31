import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const FoodComponent = ({ label, nutrients }) => {
  console.log(nutrients);
  return (
    <View style={styles.container}>
      <Text> {label} </Text>
      <Text> {Math.floor(nutrients.ENERC_KCAL)} cals </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'teal',
    marginVertical: 10,
    flexDirection: 'row',
  },
});

export default FoodComponent;
