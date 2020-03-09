import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { StartRecordingAction, StopRecordingAction, resetAction } from '../Actions/locationAction';
import { createTrack } from '../Actions/TrackAction';
import Spacer from '../components/Spacer';

const TrackForm = () => {

    const [Name, setName] = useState('');
    const dispatch = useDispatch();
    const recording = useSelector(State => State.LocationReducer.recording)
    const Locations = useSelector(State => State.LocationReducer.locations)
    let count = Locations.length;

    return (
        <>
            <Spacer>
                <Input value={Name} placeholder='Enter The Name' onChangeText={setName} />
            </Spacer>
            <Spacer>
                {recording ?
                    (
                        <Button title='Stop' onPress={() => { dispatch(StopRecordingAction(false)) }} />
                    ) :
                    (
                        <Button title='Start Recording' onPress={() => { dispatch(StartRecordingAction(true)) }} />
                    )
                }
            </Spacer>
            <Spacer>
                {(!recording && count) ?
                    (
                        <Button title='Save Recording' onPress={() => {
                            dispatch(createTrack(Locations, Name)),
                                setName(''),
                                dispatch(resetAction())
                        }} />
                    ) :
                    (
                        null
                    )
                }
            </Spacer>
        </>

    );
}

export default TrackForm