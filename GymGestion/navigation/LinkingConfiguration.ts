import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
        Root: {
            screens: {
                Student: {
                    screens: {
                        StudentScreen: 'one',
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
        StudentDetail: {
            screens: {
                StudentDetailScreen: 'StudentDetail',
            },
        },
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
