import useScale from '../../hooks/useScale';
import {StyleSheet} from 'react-native';
import { fullWidthCentered } from '../../styles/style';
import { forthColorAccent } from '../../constants/Colors';

export default function useStyles() {
  const {verticalScale,vh} = useScale();
  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems:"center",
      },
      profilePicture:{
        borderRadius: 300,
        borderColor: forthColorAccent,
        borderWidth: 6,
        padding: 4,
        marginBottom: verticalScale(30),
      },
      buttons: {
        marginTop: verticalScale(15),
      },
      forgotPassStyle:{
        marginBottom: verticalScale(15)
      },
      socialButtons: {
        display: 'flex',
        flexDirection: 'row',
      },
      formOuterwrapper:{
        flex: 1,
        ...fullWidthCentered,
        justifyContent: 'flex-end',
      },
      formControl: fullWidthCentered
    }),
  };
}
