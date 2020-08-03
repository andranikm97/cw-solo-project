import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ApiClient from '../Services/ApiService';
import Log from '../Components/Log';

const Home = ({ navigation }) => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = useCallback(async () => {
    const response = await ApiClient.getLogs();
    const data = await response.json();
    setLogs(data);
  }, []);

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={myLogs.container}>
        <FlatList
          data={logs}
          keyExtractor={(data) => data._id}
          renderItem={({ item }) => {
            return <Log navigation={navigation} log={item} />;
          }}
        />
      </View>
      <View style={addNew.container}>
        <TouchableOpacity
          style={addNew.button}
          onPress={() => {
            navigation.navigate('NewLog', {
              date: 'today',
            });
          }}
        >
          <Text style={addNew.text}>+ Create Log </Text>
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
});

const myLogs = StyleSheet.create({
  container: {
    height: 400,
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

const addNew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 70,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#eebb4d',
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 25,
  },
});

export default Home;
