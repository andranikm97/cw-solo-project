import React, { useEffect, useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  TextInput,
} from 'react-native';
import ApiClient from '../Services/ApiService';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
          value={query}
          onChangeText={setQuery}
          placeholder={'What did you eat?'}
        />
      </View>

      <FlatList
        ListEmptyComponent={null}
        style={styles.resultsContainer}
        data={avaliableIngredients.hints}
        keyExtractor={(data) => {
          return data.food.foodId;
        }}
        renderItem={({ item }) => {
          const { food } = item;
          return (
            <Text>
              {food.label}: {food.nutrients.ENERC_KCAL}
            </Text>
          );
        }}
      />

      <View style={styles.searchButton}>
        <TouchableOpacity
          onPress={() => {
            searchProduct();
          }}
        >
          <Text> {isSearching ? 'Searching ...' : 'Search'} </Text>
        </TouchableOpacity>
      </View>
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
