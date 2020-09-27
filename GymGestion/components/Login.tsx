import React, { useState } from 'react';

import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#5d54a4" />

			<View style={styles.titleLogin}>
				<Text style={styles.subTitle}>Bienvenido!</Text>
				<Text style={styles.title}>Crear una cuenta</Text>
			</View>
			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>
						Nombre de usuario
					</Text>

					<TextInput
						placeholder="Escribir nombre de usuario..."
						style={styles.inputText}
						onChangeText
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>
						Email
					</Text>

					<TextInput
						placeholder="Escribir email..."
						style={styles.inputText}
						onChangeText={value => this.setState({ comment: value })}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>
						Password
					</Text>

					<TextInput
						placeholder="Escribir email..."
						secureTextEntry={true}
						style={styles.inputText}
						onChangeText={value => this.setState({ comment: value })}
					/>
				</View>

				<View>
					<TouchableOpacity
						style={styles.buttonLogiCcontainer}
						onPress
					>
						<View style={styles.buttonLogin}>
							<Text style={styles.buttonLoginTExt}>Press Here</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	flexDirection: 'column',
    alignItems: 'stretch',
	justifyContent: 'center',
	backgroundColor: '#5d54a4'
  },
  titleLogin: {
	alignItems: 'flex-start',
	padding: 15,
	paddingHorizontal: 20,
	justifyContent: 'flex-end',
	width: '100%',
	flex: 1,
	backgroundColor: '#5d54a4',
  },
  subTitle: {
	color: 'white',
	fontSize: 18,
	marginVertical: 3
  },
  title: {
    fontSize: 37,
	fontWeight: 'bold',
	color: 'white',
	marginBottom: 15
  },
  formContainer: {
	flex: 3,
	width: '100%',
	backgroundColor: '#fccbcb',
	borderTopLeftRadius: 45,
	borderTopEndRadius: 45,
	paddingHorizontal: 25,
	paddingTop: 55,
	paddingBottom: 20,
	justifyContent: 'center'
  },
  inputContainer: {
	backgroundColor: 'transparent',
	marginBottom: 15
  },
  inputLabel: {
	fontSize: 18,
	marginLeft: 18,
	fontWeight: 'bold',
	color: '#666666'
  },
  inputText:{
	backgroundColor: 'white',
	paddingVertical: 15,
	paddingHorizontal: 20,
	borderRadius: 65,
	marginVertical: 3,
	fontSize: 18
  },
  inputIconFomt: {
	zIndex: 5
  },
  buttonLogiCcontainer: {
	backgroundColor: '#fccbcb',
	paddingVertical: 15
  },
  buttonLogin: {
	backgroundColor: '#5d54a4',
	paddingHorizontal: 25,
	paddingVertical: 25,
	borderRadius: 50,
	overflow: 'hidden'
  },
  buttonLoginTExt: {
	textAlign: 'center',
	color: 'white',
	fontSize: 22,
	textTransform: 'uppercase',
	fontWeight: 'bold'
  }
});
