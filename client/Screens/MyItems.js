import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProductDetail from '../Components/ProductDetail';

const MyItems = ({ route }) => {
  const items = route.params.products;
  return (
    <View style={styles.container}>
      <View style={flatList.container}>
        <FlatList
          data={items}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            console.log(item);
            return <ProductDetail item={item} />;
          }}
          overScrollMode={'always'}
        />
      </View>
      <TouchableOpacity style={button.container}>
        <View>
          <Text>Submit log</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'powderblue',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

const flatList = StyleSheet.create({
  container: {
    flex: 4,
    width: '100%',
    backgroundColor: 'teal',
  },
});

const button = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    backgroundColor: '#ffd36b',
  },
});

export default MyItems;
