import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { Provider } from 'react-redux';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import ShowList from './container/ShowList';
import store from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.screenColor}>
          <ShowList />
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  screenColor: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
