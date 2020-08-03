import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';

const Home = ({ navigation }) => {
  // const [chosenProducts, setChosenProducts] = useState([]);

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={styles.addNew}>
        <TouchableOpacity
          style={styles.addNewButton}
          onPress={() => {
            navigation.navigate('NewLog', {
              date: 'today',
              chosenProducts: chosenProducts,
            });
          }}
        >
          <Text style={styles.addNewText}> Create a new Entry + </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  myLogs: {
    flex: 6,
    alignItems: 'center',
  },
  addNew: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewButton: {
    backgroundColor: 'teal',
    borderRadius: 10,
    height: 70,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewText: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 25,
  },
});

export default Home;
