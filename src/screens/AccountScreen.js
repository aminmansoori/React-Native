import React from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { signOutAction } from '../Actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const dispatch = useDispatch();
    const state = useSelector(State => State.authReducer.email)

    return (
        <SafeAreaView style={{ marginTop: '20%' }}>
            <Spacer>
                <Icon
                    type='font-awesome'
                    size={100}
                    name='user-circle'
                    color='#00aced' />
            </Spacer>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>{state}</Text>
            </View>
            <Spacer>
                <Button
                    title='Sign Out'
                    onPress={() => dispatch(signOutAction())}
                />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account Screen',
    tabBarIcon: <FontAwesome name='gear' size={20} />
};

export default AccountScreen;