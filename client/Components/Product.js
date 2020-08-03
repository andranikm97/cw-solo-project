import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ApiClient from '../Services/ApiService';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const Product = ({ item, functions }) => {
  const [product, setProduct] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setProduct({
      name: item.name,
      id: item.id,
      image: item.image,
      quantity: 1,
    });
    setIsSelected(() => {
      let res = functions.checkIfSelected(item.id);
      return res;
    });
    setLoading(false);
  }, []);

  const handlePress = () => {
    if (isSelected) {
      setIsSelected(false);
      functions.removeProduct(product);
    } else {
      setIsSelected(true);
      functions.addProduct(product);
    }
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator style={styles.activity} />
      ) : (
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.wrapper}>
            <View style={styles.box}>
              <Image
                style={isSelected ? styles.boxImageSelected : styles.boxImage}
                source={product.image}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
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
  boxImageSelected: {
    opacity: 0.5,
    width: 70,
    height: 70,
  },
  activity: {
    margin: 20,
  },
});

export default Product;
