import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

import {Text, View, StatusBar} from 'react-native';

export default function StudenDetail({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#d8b9c3" />
        <Text style={styles.title}>DETALLES DEL alguien de la zona</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button
          title="SALIR DE DETALLES DEL ALUMNO"
          onPress={() => {navigation.navigate('Root')}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
