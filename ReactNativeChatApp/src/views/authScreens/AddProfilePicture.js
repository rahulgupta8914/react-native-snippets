import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import PrimaryTextView from '../../components/PrimaryTextView';
import Button from '../../components/Button';
import {secondTextColorPrimary, forthColorAccent} from '../../constants/Colors';
import useScale from '../../hooks/useScale';
import useStyles from './useStyles';
import MainLogo from '../../components/MainLogo';
import {profilePicture} from '../../constants/Images';
import {centered} from '../../styles/style';

function AddProfilePicture(props) {
  const {t} = useTranslation();
  const {verticalScale, horizentalScale} = useScale();
  const {styles} = useStyles();
  return (
    <>
      <View style={styles.container}>
        <MainLogo style={{marginTop: verticalScale(85)}} />
        <View style={centered}>
          <View
            style={styles.profilePicture}>
            <Image
              source={profilePicture}
              style={{
                width: verticalScale(150),
                height: verticalScale(150),
                resizeMode: 'contain',
              }}
              resizeMode="contain"
            />
          </View>
          <PrimaryTextView color={secondTextColorPrimary}>{`${t(
            'updateProfilePicture',
          )}`}</PrimaryTextView>
        </View>
        <View style={{...styles.formOuterwrapper,flex:0}}>
          <Button style={{marginBottom: verticalScale(20)}}>{t('next')}</Button>
        </View>
      </View>
    </>
  );
}

AddProfilePicture.propTypes = {};

export default AddProfilePicture;
