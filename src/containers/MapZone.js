import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useDispatch} from 'react-redux';
import Markers from './Markers';

export default function MapZone() {
  const dispatch = useDispatch();

  //get location and send to redux
  const origin = {latitude: 41.3874, longitude: 2.1686};
  dispatch({
    type: 'set_origin',
    payload: origin,
  });

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 41.3874,
          longitude: 2.1686,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 41.3874,
            longitude: 2.1686,
          }}
        />
        <Markers />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
