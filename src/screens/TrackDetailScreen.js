import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { useSelector } from 'react-redux';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const state = useSelector(State => State.trackReducer.TrackList)
    const _id = navigation.getParam('_id');
    const track = state.find(t => t._id === _id)
    const initialcoords = track.locations[0].coords;

    return <>
        <View style={{margin:10,alignItems:'center'}}>
            <Text style={{ fontSize: 20,color:'#6495ed' }}>{track.name}</Text>
        </View>
        <MapView
            style={{ height: 300 }}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialcoords
            }}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
    </>
};

export default TrackDetailScreen;