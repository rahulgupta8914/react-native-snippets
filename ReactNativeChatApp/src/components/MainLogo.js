import React from 'react';
import PropTypes from 'prop-types';
import {Image, ViewPropTypes} from 'react-native';
import {logo} from '../constants/Images';
import useScale from '../hooks/useScale';

function MainLogo(props) {
  const {verticalScale,horizentalScale} = useScale();
  return (
    <Image
      resizeMode="contain"
      style={{
        resizeMode: 'contain',
        width: horizentalScale(props.width),
        height: verticalScale(props.height),
        ...props.style
      }}
      source={logo}
    />
  );
}

MainLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: ViewPropTypes.style
};
MainLogo.defaultProps = {
  width: 211,
  height: 54
};

export default MainLogo;
