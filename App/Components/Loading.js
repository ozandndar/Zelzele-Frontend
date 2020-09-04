import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flex: 1, flexDirection: 'row' }}>
        <ActivityIndicator size="large" color="#517ca3" style={{ scaleX: 2, scaleY: 2, alignSelf: 'center' }} />
      </View>
    );
  }
}

export default Loading;
