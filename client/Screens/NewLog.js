import React, { useEffect, useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ApiClient from '../Services/ApiService';
import Category from '../Components/Category';
import CategoryDetail from '../Screens/CategoryDetail';
import db from '../db';
import { createStackNavigator } from '@react-navigation/stack';
import ChosenProduct from '../Components/ChosenProduct';

const NewLog = ({ navigation, route }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [avaliableIngredients, setAvaliableIngredients] = useState([]);
  const [chosenProducts, setChosenProducts] = useState([]);

  const addProduct = (product) => {
    setChosenProducts((current) => [...current, product]);
  };

  const removeProduct = (product) => {
    setChosenProducts((current) => {
      const newItems = current.filter((item) => {
        return item.id !== product.id;
      });
      return newItems;
    });
  };

  const modifyProduct = (product, operation) => {
    if (operation === '+') {
      setChosenProducts((current) => {
        const targetProduct = current.find((item) => item.id === product.id);
        targetProduct.quantity++;
        return [...current];
      });
    } else if (operation === '-') {
      setChosenProducts((current) => {
        const targetProduct = current.find((item) => item.id === product.id);
        if (targetProduct.quantity > 0) {
          targetProduct.quantity--;
        }
        return [...current];
      });
    }
  };

  const searchProduct = useCallback(async () => {
    setIsSearching(true);
    const response = await ApiClient.getIngredient(query);
    setAvaliableIngredients(response);
    setIsSearching(false);
  }, [query]);

  const dive = (items) => {
    navigation.navigate('CategoryDetail', {
      items: items,
      addProduct: addProduct,
      removeProduct: removeProduct,
    });
  };

  useEffect(() => {
    console.log('Current products:', chosenProducts);
  }, [chosenProducts]);

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={styles.searchBar}>
        <TextInput
          style={{ color: 'black' }}
          value={query}
          onChangeText={setQuery}
          placeholder={'Search globally here or tap a category'}
        />
      </View>

      <ScrollView>
        <Categories dive={dive} />
      </ScrollView>

      {query ? (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            searchProduct();
          }}
        >
          <Text> {isSearching ? <ActivityIndicator /> : 'Search'} </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyItems', {
              products: chosenProducts,
              modifyProduct: modifyProduct,
            });
          }}
        >
          <View style={products.container}>
            <Text> See My Items</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const Categories = ({ dive }) => {
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        columnWrapperStyle={{ flexWrap: 'wrap' }}
        numColumns={2}
        data={db.categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <Category dive={dive} category={item} />;
        }}
      />
    </View>
  );
};

const products = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'teal',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  searchBar: {
    height: 30,
    backgroundColor: '#B5D6CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    height: 'auto',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
    height: 60,
    width: 200,
    borderRadius: 5,
    backgroundColor: '#0050AA',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  categoryContainer: {
    flex: 1,
    marginTop: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  wrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default NewLog;
