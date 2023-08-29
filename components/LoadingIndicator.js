import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from '../styles'; 

const LoadingIndicator = () => (
  <View style={styles.loadingIndicator}>
    <ActivityIndicator />
  </View>
);

export default LoadingIndicator;

