import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, Button} from 'react-native';

import PushNotificationManager from './PushNotificationManager';

const App = () => {
  return (
    <>
      <PushNotificationManager>
        <View style={{flex: 1}}>
          <Text>asdfasdf</Text>
        </View>
      </PushNotificationManager>
    </>
  );
};

export default App;
