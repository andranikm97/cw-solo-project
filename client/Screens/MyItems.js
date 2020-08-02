import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FoodDetail from '../Components/FoodDetail';

const MyItems = ({ route }) => {
  const items = route.params.products;
  console.log('My items was called!');
  console.log('Items:', items);
  return (
    <View>
      <View style={flatList.container}>
        <FlatList
          data={items}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            console.log(item);
            return <FoodDetail>{item.name}</FoodDetail>;
          }}
        />
      </View>
      <TouchableOpacity>
        <Text>Submit log</Text>
      </TouchableOpacity>
    </View>
  );
};

const flatList = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '95%',
    paddingHorizontal: 5,
  },
});

export default MyItems;
