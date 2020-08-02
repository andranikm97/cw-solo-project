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

const Product = ({ item, addProduct, removeProduct }) => {
  const [product, setProduct] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const fetchProduct = useCallback(async () => {
    const response = await ApiClient.getProduct(item.name);
    await setProduct({
      name: response.text,
      info: response.info,
      id: await uuidv4(),
      image: item.image,
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProduct();
  }, []);

  const handlePress = () => {
    if (isSelected) {
      setIsSelected(false);
      removeProduct(product);
    } else {
      setIsSelected(true);
      addProduct(product);
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
                source={item.image}
              />
              <Text>{product.name}</Text>
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
