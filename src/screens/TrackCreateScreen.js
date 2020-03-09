// import '../_mockLocation';
import React from 'react';
import { useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../components/Map';
import { addLocationAction } from '../Actions/locationAction';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {

    const dispatch = useDispatch();
    const recording = useSelector(State => State.LocationReducer.recording)
    const callback = useCallback(location => { dispatch(addLocationAction(location)) }, [recording])
    useLocation(isFocused || recording, callback)


    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View style={{alignItems:'center'}}>
                <Text style={{color:'#6495ed'}} h2>Create a Track </Text>
            </View>
            <Map />
            <NavigationEvents />
            <TrackForm />
        </SafeAreaView>
    )
};

TrackCreateScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name='plus' size={20} />
};

export default withNavigationFocus(TrackCreateScreen);