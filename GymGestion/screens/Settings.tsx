import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { AuthContext } from '../components/context';


export default function Settings() {
  const { SingOut } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button
          title="cerrar sesion"
          onPress={() => {SingOut()}}
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
