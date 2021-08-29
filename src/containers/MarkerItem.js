import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';

import yellowMarker from '../../static/images/markers/iconscooter_avail.png';
import blackMarker from '../../static/images/markers/iconscooter_booked.png';
import redMarker from '../../static/images/markers/iconscooter_alert.png';
import blueMarker from '../../static/images/markers/iconscooter_disabled.png';

export default function MarkerItem({scooter}) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const vehicle = useSelector((state) => state);

  // useEffect(() => {
  //   if (vehicle.vehicles.id == scooter.id) {
  //     setSelected(true);
  //   } else {
  //     if (selected == true) {
  //       setSelected = false;
  //     }
  //   }
  // }, [selected]);

  const pressHandler = () => {
    if (scooter.status == 0) {
      console.log('old scooter:', vehicle.vehicles.id);
      console.log('chaging for:', scooter.id);

      dispatch({type: 'add', payload: scooter});
      console.log('new scooter:', vehicle.vehicles.id);

      setSelected(true);
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
