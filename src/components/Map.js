import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';


const Map = (props) => {
    const currentLocation = useSelector(State => State.LocationReducer.currentLocation);
    const Locations = useSelector(State => State.LocationReducer.locations)

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }

    return <MapView
        style={{ height: 300 }}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >

        <Marker
            coordinate={currentLocation.coords}
        >
            <FontAwesome5 name='walking' size={30} />
        </Marker>
        <Polyline coordinates={Locations.map(loc => loc.coords)} />

    </MapView>
};


const styles = StyleSheet.create({

});


export default Map;