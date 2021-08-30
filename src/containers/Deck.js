import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useStore} from 'react-redux';

export default function Deck() {
  const dispatch = useDispatch();
  const store = useStore();

  const [number, setNumber] = useState(0);
  const [scooter, setScooter] = useState();

  useEffect(() => {
    dispatch({
      type: 'add',
      payload: store.getState()?.vehicleArray.vehicleArray[0],
    });
    setScooter({
      vehicles: store.getState()?.vehicleArray.vehicleArray[number],
    });
  }, []);

  store.subscribe(() => {
    const newId = () => {
      const num = store
        .getState()
        ?.vehicleArray.vehicleArray.indexOf(
          store.getState()?.vehicles.vehicles,
        );
      if (num == -1) {
        return 0;
      }
      return num;
    };

    setNumber(newId());
    setScooter(store.getState()?.vehicles);
  });

  const previousHandler = () => {
    if (number > 0) {
      setNumber(number - 1);
      setScooter({
        vehicles: store.getState()?.vehicleArray.vehicleArray[number - 1],
      });
      dispatch({
        type: 'add',
        payload: store.getState()?.vehicleArray.vehicleArray[number - 1],
      });
    } else {
      console.log('this is the closest bike!');
    }
  };

  const nextHandler = () => {
    console.log('next');
    if (
      typeof store.getState()?.vehicleArray.vehicleArray[number + 1] !==
        'undefined' &&
      store.getState()?.vehicleArray.vehicleArray[number + 1].distance <=
        1200000
    ) {
      setNumber(number + 1);
      setScooter({
        vehicles: store.getState()?.vehicleArray.vehicleArray[number + 1],
      });
      dispatch({
        type: 'add',
        payload: store.getState()?.vehicleArray.vehicleArray[number + 1],
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
