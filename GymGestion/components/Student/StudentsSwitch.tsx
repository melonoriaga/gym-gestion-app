import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentContainer() {
    return (
        <View
            style={[styles.conainer]}
        >
            <TouchableOpacity
                style={[styles.button, styles.active]}
                onPress={() => {alert('oka')}}
            >
                <Text style={[styles.buttonText, styles.activeText]}>Compañeros</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {alert('oka')}}
                style={[styles.button]}
            >
                <Text style={styles.buttonText}>Zona</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    conainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        flexDirection: 'row'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    buttonText: {
        color: '#bbbfca',
        fontWeight: 'bold'
    },
    active: {
        borderBottomWidth: 2,
        borderBottomColor: '#495464'
    },
    activeText: {
        color: '#495464'
    }
});
