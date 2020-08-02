import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Category = ({ dive, category }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        dive(category.items);
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Image source={category.image} style={styles.boxImage} />
          <Text style={styles.boxText}>{category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'teal',
    marginVertical: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 30,
  },
  box: {
    height: 150,
    width: 150,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: 70,
    height: 70,
  },
  boxText: {
    color: 'black',
    fontSize: 25,
  },
});

export default Category;
