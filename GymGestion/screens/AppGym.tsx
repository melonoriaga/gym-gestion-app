import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import useColorScheme from '../hooks/useColorScheme';
import Navigation from '../navigation';

export default function AppGym() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="#5d54a4" />
            <Navigation colorScheme={colorScheme} />
        </SafeAreaProvider>
      );
  }