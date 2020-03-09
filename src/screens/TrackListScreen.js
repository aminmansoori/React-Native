import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrack, } from '../Actions/TrackAction';

const TrackListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const state = useSelector(State => State.trackReducer.TrackList)

    return <>
        <NavigationEvents onWillFocus={() => dispatch(fetchTrack())} />
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                    <ListItem chevron title={item.name} />
                </TouchableOpacity>
            }}
        />
    </>
};

export default TrackListScreen;