import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet, ViewPropTypes} from 'react-native';
import {
  secondaryColorAccent,
  thirdColorAccent,
  secondTextColorPrimary,
  forthColorAccent,
} from '../constants/Colors';
import {
  inputTextBorderRadius,
  inputTextSideSpacing,
  primaryBorderWidth,
  primaryHeight,
  primaryFontSize,
} from '../constants/Geometry';
import {RobotoRegular} from '../constants/Fonts';
import useScale from '../hooks/useScale';

// style hook
function useStyles() {
  const {verticalScale} = useScale();
  return {
    styles: StyleSheet.create({
      textWrapper: {
        marginBottom: verticalScale(20),
        width: '95%',
      },
      inputBox: {
        borderRadius: inputTextBorderRadius,
        borderColor: forthColorAccent,
        borderWidth: verticalScale(primaryBorderWidth),
        fontSize: verticalScale(primaryFontSize),
        color: secondTextColorPrimary,
        fontFamily: RobotoRegular,
        height: verticalScale(primaryHeight),
        fontWeight: 'bold',
        paddingLeft: verticalScale(inputTextSideSpacing),
        paddingRight: verticalScale(inputTextSideSpacing),
        backgroundColor: secondaryColorAccent,
      },
    }),
  };
}

function PrimaryTextInput(props) {
  const {styles} = useStyles();
  return (
    <View
      style={{...props.style, ...styles.textWrapper}}>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={{...styles.inputBox, ...props.style}}
        autoCapitalize={props.autoCapitalize}
        autoCompleteType={props.autoCompleteType}
        textContentType={props.textContentType}
        placeholder={props.placeholder}
        value={props.value}
        placeholderTextColor={thirdColorAccent}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

PrimaryTextInput.defaultProps = {
  autoCapitalize: 'none',
  textContentType: 'name',
  autoCompleteType: 'name',
  secureTextEntry: false,
};

PrimaryTextInput.propTypes = {
  style: ViewPropTypes.style,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoCompleteType: PropTypes.oneOf([
    'cc-csc',
    'cc-exp',
    'cc-exp-month',
    'cc-exp-year',
    'cc-number',
    'email',
    'name',
    'password',
    'postal-code',
    'street-address',
    'tel',
    'username',
    'off',
  ]),
  textContentType: PropTypes.oneOf([
    'none',
    'URL',
    'addressCity',
    'addressCityAndState',
    'addressState',
    'countryName',
    'creditCardNumber',
    'emailAddress',
    'familyName',
    'fullStreetAddress',
    'givenName',
    'jobTitle',
    'location',
    'middleName',
    'name',
    'namePrefix',
    'nameSuffix',
    'nickname',
    'organizationName',
    'postalCode',
    'streetAddressLine1',
    'streetAddressLine2',
    'sublocality',
    'telephoneNumber',
    'username',
    'password',
    'newPassword',
    'oneTimeCode',
  ]),
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};
export default PrimaryTextInput;
