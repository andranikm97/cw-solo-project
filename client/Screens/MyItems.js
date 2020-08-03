import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ProductDetail from '../Components/ProductDetail';

const MyItems = ({ route }) => {
  const items = route.params.products;
  const functions = route.params.functions;
  const handleSubmit = () => {
    functions.submitLog();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={flatList.container}>
        <FlatList
          data={items}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            return (
              <ProductDetail
                item={item}
                modifyProduct={functions.modifyProduct}
              />
            );
          }}
          initialScrollIndex={0}
        />
      </SafeAreaView>
      <TouchableOpacity style={button.container} onPress={handleSubmit}>
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
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

const flatList = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
  },
});

const button = StyleSheet.create({
  container: {
    width: 300,
    height: 75,
    marginVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eebb4d',
  },
});

export default MyItems;
