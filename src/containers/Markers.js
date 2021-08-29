import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import MarkerItem from './MarkerItem';

export default function Markers() {
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    const data = fetch('https://lambda.rideyego.com/technical-test', {
      headers: {
        'x-api-key': 'qxECK0jBFkLEk4glKDHx3Z88mC11mUfxq7NMR2EY',
      },
    })
      .then((response) => response.json())
      .then((response) => setScooters(response));
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
