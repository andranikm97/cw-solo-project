import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Chart from '../Components/Chart';

const LogDetail = ({ route }) => {
  const log = route.params.log;
  const [totals, setTotals] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [itemsShown, setItemsShown] = useState(false);
  const calculateTotals = useCallback(async () => {
    const mockTotals = {
      calories: 0,
      protein: 0,
      fiber: 0,
      fat: 0,
    };

    log.products.forEach((product) => {
      mockTotals.calories += Math.ceil(product.calories);
      mockTotals.protein += Math.ceil(product.protein);
      mockTotals.fiber += Math.ceil(product.fiber);
      mockTotals.fat += Math.ceil(product.fat);
    });

    await setTotals(mockTotals);
    setLoading(false);
  }, []);

  useEffect(() => {
    calculateTotals();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={loadScreen.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={main.container}>
          <View style={info.container}>
            <View style={chart.container}>
              <Chart totals={totals} />
            </View>
          </View>

          <View style={items.container}>
            {itemsShown ? (
              <View style={items.shown}>
                <FlatList
                  numColumns={3}
                  columnWrapperStyle={items.flatList}
                  data={log.products}
                  keyExtractor={(data) => data.id}
                  renderItem={({ item }) => {
                    return (
                      <View style={items.box}>
                        <Image source={item.image} style={items.image} />
                        <Text> {item.name}</Text>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={false}
                />
                <TouchableOpacity
                  onPress={() => {
                    setItemsShown((current) => !current);
                  }}
                >
                  <View style={items.hidden}>
                    <Text>Hide items</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setItemsShown((current) => !current);
                }}
              >
                <View style={items.hidden}>
                  <Text>Show items</Text>
                </View>
              </TouchableOpacity>
            )}
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
    flex: 6,
    flexDirection: 'row',
  },
});
const chart = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const items = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: 'center',
  },
  shown: {
    flex: 1,
    alignItems: 'center',
  },
  hidden: {
    marginTop: 15,
    marginBottom: 5,
    height: 30,
    width: 150,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbd46d',
  },
  hiddenText: {
    color: 'white',
    fontSize: 22,
  },
  flatList: {
    flexWrap: 'wrap',
  },
  box: {
    margin: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
});

export default LogDetail;
