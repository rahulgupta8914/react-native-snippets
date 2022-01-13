/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import './src/language/i18n';
import Navigation from './src/navigation/index';

const App: () => React$Node = () => {
  // const { t, i18n } = useTranslation();
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
