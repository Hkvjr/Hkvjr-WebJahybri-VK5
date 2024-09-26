import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map({ location, mapType }) {
  const [markers, setMarkers] = useState([]);

  const handleLongPress = (event) => {
    const newMarker = event.nativeEvent.coordinate;
    setMarkers([...markers, newMarker]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        mapType={mapType}
        onLongPress={handleLongPress}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker} />
        ))}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
