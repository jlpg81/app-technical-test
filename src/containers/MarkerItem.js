import React, {useState, useEffect, useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
import {useDispatch, useStore} from 'react-redux';

import yellowMarker from '../../static/images/markers/iconscooter_avail.png';
import blackMarker from '../../static/images/markers/iconscooter_booked.png';
import redMarker from '../../static/images/markers/iconscooter_alert.png';
import blueMarker from '../../static/images/markers/iconscooter_disabled.png';

export default function MarkerItem({scooter}) {
  const dispatch = useDispatch();
  const store = useStore();
  const [selected, setSelected] = useState(
    store.getState()?.vehicles.vehicles.id == scooter.id,
  );

  useLayoutEffect(() => {
    store.subscribe(() => {
      if (store.getState()?.vehicles.vehicles.id == scooter.id) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    });
  }, []);

  const pressHandler = () => {
    if (scooter.status == 0) {
      dispatch({type: 'add', payload: scooter});
    }
  };

  return (
    <Marker
      coordinate={{
        latitude: scooter.lat,
        longitude: scooter.lng,
      }}
      image={
        selected
          ? blueMarker
          : scooter.status == 0
          ? yellowMarker
          : scooter.status == 1
          ? blackMarker
          : redMarker
      }
      onPress={pressHandler}
    />
  );
}

const styles = StyleSheet.create({});
