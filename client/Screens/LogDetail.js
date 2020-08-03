import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ApiClient from '../Services/ApiService';

const LogDetail = ({ route }) => {
  const log = route.params.log;
  const [totals, setTotals] = useState({});
  const [isLoading, setLoading] = useState(true);

  const calculateTotals = useCallback(async () => {
    const mockTotals = {
      calories: 0,
      protein: 0,
      fiber: 0,
      fat: 0,
    };

    log.products.forEach((product) => {
      mockTotals.calories += product.calories;
      mockTotals.protein += product.protein;
      mockTotals.fiber += product.fiber;
      mockTotals.fat += product.fat;
    });

    console.log('Log:', log);
    console.log('Totals:', mockTotals);

    await setTotals(mockTotals);
    setLoading(false);
  }, []);

  useEffect(() => {
    calculateTotals();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={loadScreen.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={main.container}>
          <View style={info.container}>
            <View style={chart.container}>
              <Text>Chart</Text>
            </View>
            <View style={details.container}>
              <View style={details.row}>
                <View style={details.section}>
                  <Text>{totals.calories}</Text>
                </View>
                <View style={details.section}>
                  <Text>{totals.protein}</Text>
                </View>
              </View>
              <View style={details.row}>
                <View style={details.section}>
                  <Text>{totals.fiber}</Text>
                </View>
                <View style={details.section}>
                  <Text>{totals.fat}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={items.container}>
            <FlatList numColumns={3} columnWrapperStyle={items.flatList} />
          </View>
        </View>
      )}
    </View>
  );
};

const loadScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const main = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
const info = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const chart = StyleSheet.create({});
const details = StyleSheet.create({
  container: {
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
  },
});
const items = StyleSheet.create({
  container: {
    height: 500,
  },
  flatList: {
    flexWrap: 'wrap',
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default LogDetail;
