import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
        Root: {
            screens: {
                TabOne: {
                    screens: {
                        TabOneScreen: 'one',
                    },
                },
                TabTwo: {
                    screens: {
                        TabTwoScreen: 'two',
                    },
                },
                TabThree: {
                    screens: {
                        TabThreeScreen: 'three',
                    },
                },
                TabSetting: {
                    screens: {
                        TabSettingScreen: 'Setting',
                    },
                },
            },
        },
        NotFound: '*',
        SingIn: {
            screens: {
                SingInScreen: 'singin',
            },
        },
        SingUp: {
            screens: {
                SingUpScreen: 'singup',
            },
        },
        Splash: {
            screens: {
               SplashScreen: 'splash',
            },
        }
    },
  },
};
