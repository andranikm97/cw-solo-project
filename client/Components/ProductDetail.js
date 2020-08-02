import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import ApiClient from '../Services/ApiService';

const ProductDetail = ({ item }) => {
  item.name = item.name.slice(0, 1).toUpperCase() + item.name.slice(1);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({ ...item });

  const fetchProductInfo = useCallback(async () => {
    const response = await ApiClient.getProduct(item.name);
    const nutrients = await response.info.nutrients;
    console.log(nutrients);
    await setProduct((current) => {
      return {
        ...current,
        calories: nutrients.ENERC_KCAL,
        protein: nutrients.PROCNT,
        fiber: nutrients.FIBTG,
        fat: nutrients.FAT,
        quantity: 1,
      };
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProductInfo();
    console.log('Product:', product);
  }, []);

  return (
    <View style={card.container}>
      <View style={card.header}>
        <Text>{product.name}</Text>
      </View>
      <View style={card.info}>
        <View style={top.container}>
          <Image style={top.image} source={product.image} />

          <View style={top.details}>
            {isLoading ? (
              <ActivityIndicator style={top.activity} />
            ) : (
              <View>
                <Text>Calories: {product.calories}</Text>
                <Text>Protein: {product.protein}</Text>
                <Text>Fiber: {product.fiber}</Text>
                <Text>Fat: {product.fat}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={bottom.container}>
          <View style={bottom.currentQuantity}>
            <TouchableOpacity>
              <View style={bottom.button}>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
            <Text>{product.quantity}</Text>
            <TouchableOpacity>
              <View style={bottom.button}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const card = StyleSheet.create({
  container: {
    height: 250,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  info: {
    height: 200,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    backgroundColor: '#ebecf1',
  },
  header: {
    height: 20,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#ebecf1',
  },
});

const top = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

const bottom = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'blue',
  },
  // productName: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  currentQuantity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#f5f1da',
  },
});

export default ProductDetail;
