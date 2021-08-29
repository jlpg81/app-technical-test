import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Deck from '../containers/Deck';
import MapZone from '../containers/MapZone';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>YEGO - Technical Test</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapZone />
        </View>
        <Deck />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
    textAlign: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '80%',

    backgroundColor: 'red',
  },
});
