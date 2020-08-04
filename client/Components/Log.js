import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

const Log = ({ navigation, log }) => {
  const hours = new Date(log.date).getHours();
  const minutes = new Date(log.date).getMinutes();
  const momentString =
    moment(new Date(log.date).toISOString()).format('MMM Do') +
    `, ${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }`;
  return (
    <TouchableOpacity
      style={main.container}
      onPress={() => {
        navigation.navigate('LogDetail', {
          log: log,
          date: moment(new Date(log.date).toISOString()).format('MMM Do YYYY'),
        });
      }}
    >
      <Text>
        {log.products.length} {log.products.length === 1 ? 'item' : 'items'}
      </Text>
      <Text>{momentString}</Text>
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
