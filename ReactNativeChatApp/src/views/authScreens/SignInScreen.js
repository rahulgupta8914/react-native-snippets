import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import {useTranslation} from 'react-i18next';
import PrimaryTextView from '../../components/PrimaryTextView';
import Button from '../../components/Button';
import {socialIcons, backArrow} from '../../constants/Images';
import SocialIcon from '../../components/SocialIcon';
import MainLogo from '../../components/MainLogo';
import useStyles from './useStyles';
import useScale from '../../hooks/useScale';
import {secondTextColorPrimary} from '../../constants/Colors';
import BackArrowButton from '../../components/BackArrowButton';
import {activeOpacity} from '../../constants/Geometry';

function SignInScreen({navigation: {goBack}}) {
  const {t} = useTranslation();
  const {styles} = useStyles();
  const {horizentalScale,verticalScale} = useScale();
  // navigate
  // const navigate = page => {
  //   props.navigation.navigate(page);
  // };

  return (
    <View style={styles.container}>
      <BackArrowButton onPress={() => goBack()} />
      <MainLogo style={{ marginTop: verticalScale(85)}}  />
      <View style={styles.formOuterwrapper}>
        <View style={styles.formControl}>
          <PrimaryTextInput
            placeholder={`${t('emailPlaceHolder')}`}
            autoCapitalize="none"
            textContentType="emailAddress"
            autoCompleteType="email"
          />
          <PrimaryTextInput
            placeholder={`${t('password')}`}
            textContentType="password"
            secureTextEntry={true}
            autoCompleteType="password"
            autoCapitalize="none"
          />
        </View>
        <Button style={styles.buttons} type="primary">
          {t('signIn')}
        </Button>
        <View style={styles.socialButtons}>
          <SocialIcon source={socialIcons.google} />
          <SocialIcon source={socialIcons.linkedin} />
          <SocialIcon source={socialIcons.facebook} />
        </View>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          style={styles.forgotPassStyle}>
          <PrimaryTextView color={secondTextColorPrimary}>{`${t(
            'cantLogin',
          )}`}</PrimaryTextView>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignInScreen;
