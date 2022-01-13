import { primaryFontSize, secondaryFontSize } from "../constants/Geometry";
import { colorAccent } from "../constants/Colors";
import { RobotoRegular } from "../constants/Fonts";

export const centered = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const bottomed = {flex: 1, justifyContent: 'flex-end'};

export const fullWidthCentered = {
  width: '100%',
  alignItems: 'center',
}
// export const primaryFontStyle = {
//   fontSize: primaryFontSize,
//   color: colorAccent,
//   fontFamily: RobotoRegular,
// };

// export const secondaryFontStyle = {
//   ...primaryFontStyle,
//   fontSize: secondaryFontSize,
// };
