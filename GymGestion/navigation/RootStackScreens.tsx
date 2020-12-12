import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/Login/Splash';
import SingInScreen from '../screens/Login/SingIn';
import SingUpScreen from '../screens/Login/SingUp';

import { RootStackParamList } from '../types';

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootStackScreen({navigation}) {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SingInScreen" component={SingInScreen} />
            <RootStack.Screen name="SingUpScreen" component={SingUpScreen} />
        </RootStack.Navigator>
    );
}
