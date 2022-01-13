import React from 'react';
import PropTypes from 'prop-types';
import PrimaryTextView from './PrimaryTextView';
import {TouchableOpacity, ViewPropTypes} from 'react-native';
import {secondaryColorAccent} from '../constants/Colors';
import useScale from '../hooks/useScale';

function Button({children, onPress, style}) {
  const {verticalScale} = useScale();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: verticalScale(52),
        backgroundColor: '#1B1B2F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(5),
        marginTop: verticalScale(5),
        borderRadius: 6,
        width: '95%',
        ...style
      }}>
      <PrimaryTextView>{children}</PrimaryTextView>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  type: 'primary',
  // color: secondaryColorAccent,
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'primary-outline']),
  children: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
};

export default Button;
