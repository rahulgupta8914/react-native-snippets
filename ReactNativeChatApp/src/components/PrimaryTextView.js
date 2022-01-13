import React from 'react';
import {Text, StyleSheet, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {
  colorAccent,
  secondaryColorAccent,
  textColorPrimary,
} from '../constants/Colors';
import {RobotoRegular} from '../constants/Fonts';
import useScale from '../hooks/useScale';
import { primaryFontSize } from '../constants/Geometry';

function PrimaryTextView({children, style, textTransform, color, fontSize}) {
  const {verticalScale} = useScale();
  return (
    <Text
      style={{
        color: color,
        fontFamily:RobotoRegular,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: fontSize ? fontSize : verticalScale(primaryFontSize),
        ...style
      }}>
      {children}
    </Text>
  );
}

PrimaryTextView.defaultProps = {
  textTransform: 'none',
  color: textColorPrimary,
};

PrimaryTextView.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  textTransform: PropTypes.oneOf([
    'capitalize',
    'lowercase',
    'none',
    'uppercase',
  ]),
  style: ViewPropTypes.style
};

export default PrimaryTextView;
