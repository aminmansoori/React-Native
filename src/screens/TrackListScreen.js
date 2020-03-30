import React from 'react';
import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrack, removeTrack } from '../Actions/TrackAction';

const TrackListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const state = useSelector(State => State.trackReducer.TrackList)

    const removeCheck = (name) => {
        Alert.alert(
            'Remove Track',
            `Are you sure about removing the track ${name}`,
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Yes', onPress: () => dispatch(removeTrack(name)) },
            ],
            { cancelable: false }
        )
    };

    return <>
        <NavigationEvents onWillFocus={() => dispatch(fetchTrack())} />
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                    <ListItem chevron title={item.name} />
                    <Button
                        title={"Remove " + item.name}
                        onPress={() => removeCheck(item.name)}
                    />
                </TouchableOpacity>
            }}
        />
    </>
};

export default TrackListScreen;