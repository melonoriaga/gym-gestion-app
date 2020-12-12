import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';


import LinkingConfiguration from './LinkingConfiguration';
import RootStackScreen from '../navigation/RootStackScreens';
import RootNavigator from '../navigation/RootNavigation';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
	>
		{ false ?
			<RootNavigator />
			:
			<RootStackScreen />
		}
    </NavigationContainer>
  );
}
