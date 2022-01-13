import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import useScale from '../hooks/useScale';
import {backArrow} from '../constants/Images';
import {activeOpacity} from '../constants/Geometry';

function BackArrowButton({onPress}) {
  const {verticalScale, horizentalScale} = useScale();
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: verticalScale(15),
        paddingLeft: 5,
      }}>
      <Image
        style={{
          width: horizentalScale(30),
          height: verticalScale(30),
        }}
        resizeMode="contain"
        source={backArrow}
      />
    </TouchableOpacity>
  );
}

BackArrowButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackArrowButton;
