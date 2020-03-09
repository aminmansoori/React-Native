import React, { useEffect } from 'react';
import { automaticSignInAction } from '../Actions/authAction';
import { useDispatch } from 'react-redux';

const splash = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(automaticSignInAction());
    }, [])

    return (
        <>

        </>
    );
};

splash.navigationOptions = () => {
    return {
        headerShown: false
    };
};

export default splash;