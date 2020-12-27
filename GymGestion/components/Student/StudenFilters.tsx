import * as React from 'react';
import { StyleSheet } from 'react-native';

import {View, Text} from 'react-native';

export default function StudentFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aca los filtros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
  }
});
