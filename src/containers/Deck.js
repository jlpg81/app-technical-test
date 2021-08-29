import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Deck() {
  return (
    <View style={styles.deckContainer}>
      <Text>Previous</Text>
      <View>
        <Text>Name:</Text>
        <Text>Battery: %</Text>
      </View>
      <Text>Next</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
