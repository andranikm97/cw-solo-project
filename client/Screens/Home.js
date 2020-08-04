import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ApiClient from '../Services/ApiService';
import Log from '../Components/Log';

const Home = ({ navigation }) => {
  const [logs, setLogs] = useState([]);
  const [fetchingLogs, setFetchingLogs] = useState(true);

  const fetchLogs = useCallback(async () => {
    const response = await ApiClient.getLogs();
    const data = await response.json();
    await setLogs(
      data.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        } else {
          return 0;
        }
      }),
    );
    setFetchingLogs(false);
  }, []);

  useEffect(() => {
    fetchLogs();
  }, []);
  // fetchLogs();

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Logs</Text>
      </View>
      <View style={myLogs.container}>
        {fetchingLogs ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={logs}
            keyExtractor={(data) => data._id}
            renderItem={({ item }) => {
              return <Log navigation={navigation} log={item} />;
            }}
            showsHorizontalScrollIndicator={false}
          />
        )}
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
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
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
    fontWeight: '600',
  },
});

export default Home;
