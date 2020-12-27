import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import StudentScreen from '../screens/StudentScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import Settings from '../screens/Settings';

import {
    BottomTabParamList,
    StudentParamList,
    TabTwoParamList,
    TabThreeParamList,
    SettingsParamList
} from '../types';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            initialRouteName="Student"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <BottomTab.Screen
                name="Fits"
                component={StudentNavigator}
                options={{
                    tabBarColor: "#5d54a4",
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-flash" color={color} />,
                }}
            />

            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarColor: "#a37eba",
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />

            <BottomTab.Screen
                name="TabThree"
                component={TabThreeNavigator}
                options={{
                    tabBarColor: "#5d54a4",
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-play" color={color} />,
                }}
            />

            <BottomTab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                    tabBarColor: "#a37eba",
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const StudentStack = createStackNavigator<StudentParamList>();

function StudentNavigator() {
  return (
    <StudentStack.Navigator>
        <StudentStack.Screen
            name="StudentScreen"
            component={StudentScreen}
            options={{
                headerTitle: 'Aca los compas',
                headerStyle: {
                    backgroundColor: '#5d54a4',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}
        />
    </StudentStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
        <TabTwoStack.Screen
            name="TabTwoScreen"
            component={TabTwoScreen}
            options={{
                headerTitle: 'Aca las rutinas',
                headerStyle: {
                    backgroundColor: '#a37eba',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}
        />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
        <TabThreeStack.Screen
            name="TabThreeScreen"
            component={TabThreeScreen}
            options={{
                headerTitle: 'Aca mi perfil',
                headerStyle: {
                    backgroundColor: '#5d54a4',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}
        />
    </TabThreeStack.Navigator>
  );
}


const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
        <SettingsStack.Screen
            name="Settings"
            component={Settings}
            options={{
                headerTitle: 'Aca settings',
                headerStyle: {
                    backgroundColor: '#a37eba',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}
        />
    </SettingsStack.Navigator>
  );
}
