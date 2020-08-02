import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Product from '../Components/Product';

const CategoryDetail = ({ route }) => {
  const items = route.params.items;
  const addProduct = route.params.addProduct;
  const removeProduct = route.params.removeProduct;

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.flatlistWrap}
        numColumns={2}
        data={items}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return (
            <Product
              addProduct={addProduct}
              removeProduct={removeProduct}
              item={item}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  item: {
    height: 75,
    width: 75,
    margin: 20,
    borderRadius: 5,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 150,
    borderRadius: 5,
    backgroundColor: 'teal',
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistWrap: {
    flexWrap: 'wrap',
  },
});
export default CategoryDetail;
