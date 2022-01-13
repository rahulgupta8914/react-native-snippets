import React from 'react';
import {SafeAreaView, View, Image, TouchableOpacity, Text} from 'react-native';
import {logo, welcomeImage} from '../constants/Images';
import useScale from '../hooks/useScale';
import Button from '../components/Button';
import {useTranslation} from 'react-i18next';
import MainLogo from '../components/MainLogo';

export default function WelcomeScreen2(props) {
  const {horizentalScale, verticalScale} = useScale();
  const {t} = useTranslation();
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#44C9A2',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <MainLogo style={{ marginTop: verticalScale(85)}}  />
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              resizeMode: 'contain',
              width: horizentalScale(200),
            }}
            source={welcomeImage}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: verticalScale(20),
          }}>
          <Button onPress={()=>props.navigation.navigate("Sign In")}>{`${t('signIn')}`}</Button>
          <Button onPress={()=>props.navigation.navigate("Sign Up")}>{`${t('signUp')}`}</Button>
        </View>
      </SafeAreaView>
    </>
  );
}
