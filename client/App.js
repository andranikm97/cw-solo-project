import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={styles.myLog}>
        <Text>Let's Start!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.addNew}>
        <TouchableHighlight style={styles.addNewButton} onPress={() => {}}>
          <Text style={styles.addNewText}>+ Create New Entry</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  myLog: {
    flex: 6,
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
