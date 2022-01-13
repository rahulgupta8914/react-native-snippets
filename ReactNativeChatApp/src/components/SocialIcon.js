import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import {activeOpacity} from '../constants/Geometry';
import useScale from '../hooks/useScale';
import {forthColorAccent} from '../constants/Colors';

function SocialIcon({source, onPress}) {
  const {verticalScale, horizentalScale} = useScale();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: verticalScale(24),
        paddingBottom: verticalScale(24),
      }}
      activeOpacity={activeOpacity}>
      <Image
        source={source}
        style={{
          resizeMode: 'contain',
          width: horizentalScale(45),
          height: verticalScale(39),
        }}
      />
    </TouchableOpacity>
  );
}

SocialIcon.propTypes = {
  source: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SocialIcon;
