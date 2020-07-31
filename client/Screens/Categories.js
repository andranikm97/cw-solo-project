import React from 'react';
import { Text, View } from 'react-native';

const Categories = ({ navigation, route }) => {
  const categoryName = route.params.categoryName;
  return (
    <View>
      <Text>Hello this is the category for {categoryName}</Text>
    </View>
  );
};

export default Categories;
