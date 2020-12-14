import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            options={{
                headerStyle: {
                    backgroundColor: '#5d54a4',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}
        >
             <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
            />
        </Stack.Navigator>
    );
}
