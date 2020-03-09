import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, onSubmit, SubmitButtonText }) => {

    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('mypassword');

    return (
        <>
            <View style={{alignItems:'center',marginBottom:30}}>
                <Text style={{color:'#6495ed'}} h3>{headerText}</Text>
            </View>

            <Input
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />

            <Input
                secureTextEntry
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Spacer>
                <Button
                    title={SubmitButtonText}
                    onPress={() => onSubmit(email, password)}
                />
            </Spacer>
        </>
    );
};


export default AuthForm;