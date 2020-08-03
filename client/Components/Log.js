import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

const Log = ({ navigation, log }) => {
  return (
    <TouchableOpacity
      style={main.container}
      onPress={() => {
        navigation.navigate('LogDetail', {
          log: log,
        });
      }}
    >
      <Text>
        {log.products.length} {log.products.length === 1 ? 'item' : 'items'}
      </Text>
      <Text>{moment(log.date).fromNow()}</Text>
    </TouchableOpacity>
  );
};

const main = StyleSheet.create({
  container: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#f7d6bf',
    marginTop: 15,
  },
});

const log = StyleSheet.create({
  container: {
    backgroundColor: '#f7d6bf',
  },
});

export default Log;
