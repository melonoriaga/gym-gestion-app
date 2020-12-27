import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import StudenDetail from '../screens/Student/StudenDetail';
import StudentZoneDetail from '../screens/Student/StudentZoneDetail';

const MainStack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

function MainStackScreen() {
  return (
    <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        options={{
            headerStyle: {
                backgroundColor: '#5d54a4',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }}
    >
      <MainStack.Screen name="Root" component={BottomTabNavigator} />
    </MainStack.Navigator>
  );
}

export default function RootStackScreen({navigation}) {
  return (
    <RootStack.Navigator
        mode="modal"
        screenOptions={{
            headerShown: true,
            headerTitle: "Te vi",
            headerTintColor: '#5d54a4',
            headerPressColorAndroid: '#5d54a4',
            headerStyle: {
              backgroundColor: '#d8b9c3',
            }
        }}
        options={{
          tabBarColor: "#5d54a4",
        }}
    >
        <RootStack.Screen
            name="Root"
            component={MainStackScreen}
            options={{ headerShown: false }}
        />

        <RootStack.Screen name="StudenDetail" component={StudenDetail} />

        <RootStack.Screen name="StudentZoneDetail" component={StudentZoneDetail} />

    </RootStack.Navigator>
  );
}