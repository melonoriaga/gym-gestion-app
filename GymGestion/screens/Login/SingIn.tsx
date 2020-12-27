import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import { AuthContext } from '../../components/context';
import Users from '../../model/user';

export default function SinInScreen({navigation}) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true
    });

    const textInputChange = (value: String) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(value) === false) {
            setData({
                ...data,
                email: value,
                textInputChange: false
            });
        }
        else {
            setData({
                ...data,
                email: value,
                textInputChange: true
            });
        }
    }

    const HandleValidateEmail = (value) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(value) === false) {
           setData({
               ...data,
               isValidEmail: false
           })
        }
        else {
            setData({
                ...data,
                isValidEmail: true
            })
        }
    }

    const HandleValidatePassword = (value) => {
        console.log(value, 'value')
        if (value.lenght < 4) {
            setData({
                ...data,
                isValidPassword: false
            })
        } else {
            setData({
                ...data,
                isValidPassword: true
            })
        }
    }

    const handlePasswordChange = (pass: String) => {
        if (pass.length < 4) {
            setData({
                ...data,
                password: pass,
                isValidPassword: false
            })
        } else {
            setData({
                ...data,
                password: pass,
                isValidPassword: true
            })
        }
    }

    const toggleSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const { SingIn } = React.useContext(AuthContext);

    const HandleLogin = (email: String, password: String) => {
        const findUser = Users.filter( item => {
            return email === item.email && password === item.password
        });

        if (findUser.length === 0 ) {
            Alert.alert('Ususario invalido', 'el usuario o password no conciden', [
                {text: 'Okey'}
            ])

            return;
        }

        SingIn(findUser)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.View
                    animation="bounceInLeft"
                    duraration={2000}
                    style={styles.logoContainer}
                >
                    <View style={styles.logo}>
                        <Ionicons
                            style={{ marginBottom: -3 }}
                            name="ios-body"
                            color="#424874"
                            size={40}
                        />
                    </View>
                </Animatable.View>

                <Animatable.Text
                    animation="bounceInRight"
                    delay={500}
                    style={styles.logoText}
                >
                    Comencemos!
                </Animatable.Text>
            </View>

            <Animatable.View
                delay={500}
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Email</Text>

                    <View style={styles.inputIconText}>
                        <Ionicons
                            style={styles.inputIcon}
                            name="md-at"
                            color="#424874"
                            size={28}
                        />

                        <TextInput
                            style={styles.inputText}
                            placeholder="email aqui.."
                            placeholderTextColor="#424874"
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => HandleValidateEmail(e.nativeEvent.text)}
                        />

                        { data.textInputChange ?
                            <Animatable.View
                                style={styles.inputIconContainer}
                                animation="bounceIn"
                            >
                                <Ionicons
                                    style={styles.inputIcon}
                                    name="md-checkmark-circle-outline"
                                    color="#61b15a"
                                    size={24}
                                />
                            </Animatable.View>
                        :
                            <></>
                        }
                    </View>

                    {data.isValidEmail ? null :
                        <Animatable.View
                            animation="fadeInLeft"
                            duration={500}
                        >
                            <Text style={styles.messageError}>Ingresar un email correcto</Text>
                        </Animatable.View>
                    }
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Password</Text>

                    <View style={styles.inputIconText}>
                        <Ionicons
                            style={styles.inputIcon}
                            name="ios-key"
                            color="#424874"
                            size={28}
                        />

                        <TextInput
                            style={styles.inputText}
                            placeholder="Tu contraseña ..."
                            placeholderTextColor="#424874"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                            onEndEditing={(e) => HandleValidatePassword(e.nativeEvent.text)}
                        />

                        { data.secureTextEntry ?
                            <TouchableOpacity
                                onPress={() => toggleSecureEntry()}
                                style={styles.inputIconButton}
                            >
                                <Ionicons
                                    style={styles.inputIcon}
                                    name="ios-eye-off"
                                    color="#424874"
                                    size={24}
                                />
                            </TouchableOpacity>
                        :
                            <TouchableOpacity
                                onPress={() => toggleSecureEntry()}
                                style={styles.inputIconButton}
                            >
                                <Ionicons
                                    style={styles.inputIcon}
                                    name="ios-eye"
                                    color="#424874"
                                    size={24}
                                />
                            </TouchableOpacity>
                        }
                    </View>

                    {data.isValidPassword ? null :
                        <Animatable.View
                            animation="fadeInLeft"
                            duration={500}
                        >
                            <Text style={styles.messageError}>Password incorrecto</Text>
                        </Animatable.View>
                    }
                </View>

                <View style={styles.buttonLinkConteiner}>
                    <TouchableOpacity
                        style={styles.buttonLink}
                    >
                        <Text style={styles.buttonLinkText}>Olvide la contraseña</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttonPrimaryblock}
                        onPress={() => {HandleLogin(
                            data.email,
                            data.password
                        )}}
                    >
                        <Text style={styles.buttonText}>
                            Ingresar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSecondaryBlock}
                        onPress={ () => { navigation.navigate('SingUpScreen') }}
                    >
                        <Text style={styles.buttonSecondaryText}>
                            No tengo cuenta
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

const {height} = Dimensions.get("screen");
const heigth_logo = height * 0.1;
const heigth_min_logo = height * 0.07;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#424874'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
    logoText: {
        textAlign: 'center',
        color: '#f4eeff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    footer: {
        backgroundColor: '#f4eeff',
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        justifyContent: 'center'
    },
    inputGroup: {
        marginBottom: 14
    },
    inputLabel: {
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 2,
        color: '#424874'
    },
    inputIconText: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#424874',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        fontSize: 20,
        width: '100%',
    },
    inputText:  {
        width: '80%'
    },
    inputIconContainer: {
        width: 200
    },
    inputIcon: {
        marginRight: 10,
        width: '10%',
    },
    inputIconButton: {
        width: 200
    },
    buttonsContainer: {
        marginVertical: 25
    },
    buttonPrimaryblock: {
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
    },
    buttonSecondaryBlock: {
        marginTop: 20,
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#424874',
        textAlign: 'center',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonSecondaryText: {
        textAlign: 'center',
        color: '#424874',
        fontSize: 16
    },
    messageError: {
        marginBottom: 10,
        color: '#ea2c62',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonLink: {
        padding: 10
    },
    buttonLinkText: {
        textAlign: 'center',
        color: '#424874',
    }
})