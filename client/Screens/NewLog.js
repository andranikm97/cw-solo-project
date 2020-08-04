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
import db from '../db';

const NewLog = ({ navigation, route }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [chosenProducts, setChosenProducts] = useState([]);

  const checkIfSelected = (itemId) => {
    return !!chosenProducts.find((item) => item.id === itemId);
  };

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

  const modifyProduct = (updatedProduct, operation) => {
    switch (operation) {
      case '+':
        setChosenProducts((current) => {
          const targetProduct = current.find(
            (item) => item.id === updatedProduct.id,
          );
          targetProduct.quantity++;
          return [...current];
        });
        break;
      case '-':
        setChosenProducts((current) => {
          const targetProduct = current.find(
            (item) => item.id === updatedProduct.id,
          );
          if (targetProduct.quantity > 0) {
            targetProduct.quantity--;
          }
          return [...current];
        });
        break;
      case 'info':
        setChosenProducts((current) => {
          const targetProduct = current.find(
            (item) => item.id === updatedProduct.id,
          );
          Object.assign(targetProduct, updatedProduct);
          return [...current];
        });
        break;
    }
  };

  const submitLog = async () => {
    setChosenProducts([]);
    await ApiClient.submitLog(chosenProducts);
    navigation.navigate('Home');
  };

  const dive = (items) => {
    navigation.navigate('CategoryDetail', {
      items: items,
      functions: {
        addProduct,
        removeProduct,
        checkIfSelected,
      },
    });
  };

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={searchBar.container}>
        <TextInput
          style={{ color: 'black' }}
          value={query}
          onChangeText={(text) => {
            setQuery(text);
          }}
          placeholder={'Search product...'}
        />
      </View>

      <ScrollView>
        <Categories dive={dive} />
      </ScrollView>

      {query ? (
        <TouchableOpacity
          style={searchBar.searchButton}
          onPress={() => {
            setQuery('');
            // searchProduct();
          }}
        >
          <Text> {isSearching ? <ActivityIndicator /> : 'Search'} </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyItems', {
              products: chosenProducts,
              functions: {
                modifyProduct,
                submitLog,
              },
            });
          }}
        >
          <View style={itemsButton.container}>
            <Text style={itemsButton.text}> See My Items</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const Categories = ({ dive }) => {
  return (
    <View style={categoriesPool.container}>
      <FlatList
        columnWrapperStyle={{ flexWrap: 'wrap' }}
        numColumns={2}
        data={db.categories}
        keyExtractor={(category) => category.name}
        renderItem={({ item }) => {
          return <Category dive={dive} category={item} />;
        }}
      />
    </View>
  );
};

const searchBar = StyleSheet.create({
  container: {
    height: 50,
    width: 200,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#f7d6bf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  results: {
    height: 'auto',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
    height: 60,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#0050AA',
  },
});

const categoriesPool = StyleSheet.create({
  container: {
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

const itemsButton = StyleSheet.create({
  container: {
    height: 100,
    width: 200,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eebb4d',
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    color: 'white',
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
});

export default NewLog;
