import React from 'react';
import { FlatList, Text, View } from 'react-native';

const listaRecordes = ({ recordes }) => {
  return (
    <View>
      <FlatList
        data={recordes}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default listaRecordes;
