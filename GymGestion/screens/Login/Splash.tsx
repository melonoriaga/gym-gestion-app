import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';


export default function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.View
                    animation="zoomInDown"
                    duraration={2000}
                    style={styles.logoContainer}
                >
                    <View style={styles.logo}>
                        <Ionicons
                            size={30}
                            style={{ marginBottom: -3 }}
                            name="ios-body"
                            color="#424874"
                            size={80}
                        />
                    </View>
                </Animatable.View>
            </View>

            <Animatable.View
                delay={500}
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.title}>
                    Encontrar actividad fisica acorde a tus necesidades ahora es
                    <Text style={styles.textBold}> más fácil!!!</Text>
                </Text>
                <Text style={styles.text}>
                    Crea una cuenta y comienza tu busqueda
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => { navigation.navigate('SingInScreen') }}
                >
                    <Text style={styles.buttonText}>
                        Comienza ya!
                    </Text>

                    <Ionicons
                        style={styles.buttonIcon}
                        name="md-arrow-round-forward"
                        color="#f4eeff"
                        size={30}
                    />
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const {height} = Dimensions.get("screen");
const heigth_logo = height * 0.2;
const heigth_min_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#424874'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        borderRadius: 100,
        height: heigth_logo,
        width: heigth_logo,
        backgroundColor: '#dcd6f7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        borderRadius: 100,
        height: heigth_min_logo,
        width: heigth_min_logo,
        backgroundColor: '#a6b1e1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        backgroundColor: '#f4eeff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    title: {
        width: '100%',
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'left'
    },
    text: {
        width: '100%',
        textAlign: 'left',
        marginBottom: 20
    },
    textBold: {
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20,
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: '#424874',
        textAlign: 'center',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        textAlign: 'center',
        color: '#f4eeff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonIcon: {
        marginLeft: 20
    }
})