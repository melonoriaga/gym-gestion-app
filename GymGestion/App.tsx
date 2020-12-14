import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from './components/context';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import RootStackScreen from './navigation/RootStackScreens';
import RootNavigator from './navigation/RootNavigation';

export default function App() {
    const initialLoginState = {
        isLoading: true,
        email: null,
        userToken: null
    };

    const LoginReducer = (prevState: any, action: any) => {
        switch (action.type) {
            case 'RETRIVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false
                };
        }
    }

    const [loginState, dispatch] = React.useReducer(LoginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
        SingIn: async (findUser) => {
            const userToken = String(findUser[0].userToken);

            try {
                await AsyncStorage.setItem('userToken', userToken);

            } catch (e) {
                console.error(e);
            }

            dispatch({
                type: 'LOGIN',
                id: findUser[0].email,
                token: userToken
            });
        },
        SingOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');

            } catch (e) {
                console.error(e);
            }
            dispatch({
                type: 'LOGOUT',
            });
        },
        SingUp: () => {
            // functiom here
        },
    }), []);

    useEffect(() => {
        setTimeout(async () => {
            let userToken = null;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.error(e);
            }

            dispatch({
                type: 'RETRIVE_TOKEN',
                token: userToken
            });
        }, 1000);
    }, [])

    if (loginState.isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <StatusBar backgroundColor="#5d54a4" />
                <ActivityIndicator size="large" color="#424874" />
            </View>
        )
    } else {
        return (
            <AuthContext.Provider value={authContext}>
                <SafeAreaProvider>
                    <StatusBar backgroundColor="#424874" />
                    <NavigationContainer linking={LinkingConfiguration}>
                        { loginState.userToken != null ?
                            <RootNavigator />
                            :
                            <RootStackScreen />
                        }
                    </NavigationContainer>
                </SafeAreaProvider>
            </AuthContext.Provider>
        );
    }
}
