import React from 'react'
import { View, Image } from 'react-native'
import { centered } from '../styles/style';
import { logo } from '../constants/Images';
import useScale from '../hooks/useScale';
import MainLogo from '../components/MainLogo';

function WelcomeScreen(props) {
    const {horizentalScale} = useScale();
    setTimeout(() => {
        props.navigation.navigate("Welcome2");
    }, 2000);
    return (
        <View style={centered}>
            <MainLogo width={horizentalScale(211)} />
        </View>
    )
}

export default WelcomeScreen

