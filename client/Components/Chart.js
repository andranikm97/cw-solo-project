import React from 'react';
import { View, Text } from 'react-native';

import { PieChart } from 'react-native-chart-kit';

const Chart = ({ totals }) => {
  const data = [
    {
      name: 'calories',
      amount: totals.calories,
      color: '#ed6663',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'protein',
      amount: totals.protein,
      color: '#00bcd4',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'fiber',
      amount: totals.fiber,
      color: '#322f3d',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      legend: totals.fiber + 'g of protein',
    },
    {
      name: 'fat',
      amount: totals.fat,
      color: '#f7d6bf',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundColor: 'white',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '3',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View>
      <PieChart
        data={data}
        width={150}
        height={150}
        chartConfig={chartConfig}
        backgroundColor="transparent"
        accessor="amount"
        paddingLeft="10"
        absolute
      />
    </View>
  );
};

export default Chart;
