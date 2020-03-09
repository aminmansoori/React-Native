import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {  Text } from 'react-native-elements';
import {signInAction} from '../Actions/authAction';
import { useDispatch } from 'react-redux';
import AuthForm from '../components/AuthForm';


const SigninScreen = (props) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='SignIn to Tracker'
                SubmitButtonText='Sign In'
                onSubmit={(email, password) => dispatch(signInAction(email, password))}
            />
            <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={() => props.navigation.navigate('Signup')}>
                <Text style={{ color: '#6495ed' }}>Dont have an account? Sign up instead</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


export default SigninScreen;