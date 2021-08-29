import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useStore} from 'react-redux';

export default function Deck() {
  const [number, setNumber] = useState(0);
  store = useStore();
  console.log('deck.js global state', store?.getState());
  console.log(
    'deck.js scooterArray',
    store.getState()?.vehicleArray.vehicleArray,
  );
  const [scooter, setScooter] = useState({
    vehicles: store.getState()?.vehicleArray.vehicleArray[number],
  });

  store.subscribe(() => {
    setScooter(store.getState()?.vehicles);
  });

  const previousHandler = () => {
    console.log('pressing previous');
    if (number > 0) {
      setNumber(number - 1);
      setScooter({
        vehicles: store.getState()?.vehicleArray.vehicleArray[number - 1],
      });
    } else {
      console.log('this is the closest bike!');
    }
  };

  const nextHandler = () => {
    console.log('pressing next');
    if (
      store.getState()?.vehicleArray.vehicleArray[number + 1].distance <=
      1200000
    ) {
      setNumber(number + 1);
      setScooter({
        vehicles: store.getState()?.vehicleArray.vehicleArray[number + 1],
      });
    } else {
      console.log('next bike too far away!');
    }
  };

  return (
    <View style={styles.deckContainer}>
      <TouchableOpacity onPress={previousHandler}>
        <Text>Previous</Text>
      </TouchableOpacity>
      <View>
        <Text>Name: {scooter?.vehicles.name}</Text>
        <Text>Battery: {scooter?.vehicles.battery}%</Text>
        <Text>Distance: {scooter?.vehicles.distance}</Text>
      </View>
      <TouchableOpacity onPress={nextHandler}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
