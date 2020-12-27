import * as React from 'react';
import {View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentContainer({borderColor}) {
    return (
        <View
            style={[styles.avatarContainer, {
                borderColor: borderColor
            }]}
        >
            <View style={[styles.avatar]}>
                <Ionicons
                    style={styles.avatarIcon}
                    name="ios-body"
                    color="#424874"
                    size={30}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginRight: 10,
        padding: 5,
        width: 60,
        height: 60,
        backgroundColor: '#dcd6f7',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#424874'
    }
});
