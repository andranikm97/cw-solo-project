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
} from 'react-native';
import ApiClient from '../Services/ApiService';
import CategoryComponent from '../Components/CategoryComponents';
import FoodComponent from '../Components/FoodComponent';

const LogModal = ({ navigation, route }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [avaliableIngredients, setAvaliableIngredients] = useState({});

  const searchProduct = useCallback(async () => {
    setIsSearching(true);
    const response = await ApiClient.getIngredient(query);
    setAvaliableIngredients(response);
    setIsSearching(false);
  }, [query]);

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

      <FlatList
        ListEmptyComponent={null}
        style={styles.resultsContainer}
        data={avaliableIngredients.hits}
        keyExtractor={(data) => data._id}
        renderItem={({ item }) => {
          // console.log(item);
          // const { food } = item;
          return (
            // <FoodComponent label={food.label} nutrients={food.nutrients} />
            <Text>Working</Text>
          );
        }}
      />

      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          searchProduct();
        }}
      >
        <Text> {isSearching ? 'Searching ...' : 'Search'} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// const MainSuggestion = (ingerdient) => {
//   return (
//     <View>
//       <Text>Search Primary Suggestion</Text>
//       <Text>{ingerdient.label}</Text>
//     </View>
//   );
// };

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
});

export default LogModal;
