import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {getDistance} from 'geolib';

import MarkerItem from './MarkerItem';

const calculateDistance = (origin, scooter) => {
  return getDistance(origin, {latitude: scooter.lat, longitude: scooter.lng});
};

const calculateDistanceArray = (origin, scooterArray) => {
  const newArray = [];
  for (let index = 0; index < scooterArray.length; index++) {
    const element = scooterArray[index];
    element.distance = calculateDistance(origin, element);
    newArray.push(element);
  }
  newArray.sort(function (a, b) {
    return a.distance - b.distance;
  });
  return newArray;
};

export default function Markers() {
  const dispatch = useDispatch();
  const [scooters, setScooters] = useState([]);
  const origin = {latitude: 41.3874, longitude: 2.1686};

  useEffect(() => {
    const data = fetch('https://lambda.rideyego.com/technical-test', {
      headers: {
        'x-api-key': 'qxECK0jBFkLEk4glKDHx3Z88mC11mUfxq7NMR2EY',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const theArray = [
          {
            battery: 0,
            id: 0,
            lat: 41.396287,
            lng: 2.141957,
            name: 'Zero',
            status: 0,
          },
          {
            battery: 1,
            id: 1,
            lat: 41.396287,
            lng: 2.160057,
            name: 'One',
            status: 0,
          },
          {
            battery: 2,
            id: 2,
            lat: 41.396287,
            lng: 1.131957,
            name: 'Two',
            status: 0,
          },
        ];
        // here we can update the array...
        const theNewArray = calculateDistanceArray(origin, response);

        dispatch({
          type: 'create_vehicle_array',
          payload: theNewArray,
        });

        setScooters(theNewArray);
      });
  }, []);

  return (
    <>
      {scooters.map((scooter, index) => (
        <MarkerItem scooter={scooter} key={index} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({});
