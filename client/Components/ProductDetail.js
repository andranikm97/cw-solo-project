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

const ProductDetail = ({ item, modifyProduct }) => {
  item.name = item.name.slice(0, 1).toUpperCase() + item.name.slice(1);

  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({ ...item });
  const [chosenQuantity, setChosenQuantity] = useState(1);

  const fetchProductInfo = useCallback(async () => {
    const response = await ApiClient.getProduct(item.name);
    const nutrients = await response.info.nutrients;
    await setProduct((current) => {
      return {
        ...current,
        calories: nutrients.ENERC_KCAL,
        protein: nutrients.PROCNT,
        fiber: nutrients.FIBTG,
        fat: nutrients.FAT,
      };
    });
    setLoading(false);
  }, []);

  const handleClick = (operation) => {
    modifyProduct(product, operation);
  };

  useEffect(() => {
    fetchProductInfo();
  }, []);

  return (
    <View style={card.container}>
      <View style={card.header}>
        <Text style={card.headerText}>{product.name}</Text>
      </View>
      <View style={card.info}>
        <View style={top.container}>
          <View style={top.imageBox}>
            <Image style={top.image} source={product.image} />
          </View>

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
            <TouchableOpacity
              onPress={() => {
                setChosenQuantity((current) => {
                  let newQuantity = current > 0 ? current - 1 : 0;
                  return newQuantity;
                });
                handleClick('-');
              }}
            >
              <View style={bottom.button}>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={bottom.quantityText}>{chosenQuantity}</Text>
            <TouchableOpacity
              onPress={() => {
                setChosenQuantity((current) => {
                  let newQuantity = current + 1;
                  return newQuantity;
                });
                handleClick('+');
              }}
            >
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
    height: 40,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#ebecf1',
  },
  headerText: {
    color: 'black',
    fontSize: 22,
  },
});

const top = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  currentQuantity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quantityText: {
    color: 'white',
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
