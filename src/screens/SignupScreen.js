import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { signUpAction, automaticSignInAction } from '../Actions/authAction';
import AuthForm from '../components/AuthForm';
import { useDispatch } from 'react-redux';

const SignupScreen = (props) => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(automaticSignInAction()) }, [])

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Signup for Tracker'
                SubmitButtonText='Sign Up'
                onSubmit={(email, password) => dispatch(signUpAction(email, password))}
            />
            <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={() => props.navigation.navigate('Signin')}>
                <Text style={{ color: '#6495ed' }}>Already have an account? Sign in instead</Text>
            </TouchableOpacity>
        </View>
    );
};
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});


export default SignupScreen;