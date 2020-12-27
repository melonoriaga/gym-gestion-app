import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import Avatar from './StudentAvatar';

export default function StudentContainer({items}) {
    return (
        <View style={styles.itemContainer}>
            { items.estado == 'entrenando' ?
                <Avatar borderColor="#424874" />
            : items.estado == 'conectado' ?
                <Avatar borderColor="#adce74" />
            :
                <Avatar borderColor="#dcd6f7" />
            }

            <View style={styles.itemInfoContainer}>
                <Text style={styles.itemUsername}>
                    @{ items.username }
                </Text>

                <View style={styles.gymAndRutine}>
                    <Text style={styles.gymTitle}>
                        { items.gimansio }
                    </Text>
                </View>
            </View>

            <View style={styles.itemTimeContainer}>
                <Text style={styles.timeTitle}>
                    { items.tiempo_entrenamiento }
                </Text>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 15,
        paddingRight: 20,
        paddingLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatarContainer: {
        marginRight: 14,
        padding: 5,
        width: 60,
        height: 60,
        backgroundColor: '#dcd6f7',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#424874',
        flex: 1,
    },
    estrenando: {
        borderColor: '#adce74'
    },
    itemInfoContainer: {
        flex: 4
    },
    itemUsername: {
        color: '#454545',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    gymAndRutine: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'flex-end'
    },
    gymTitle: {
        fontSize: 16,
        color: '#555555',
        marginRight: 10
    },
    rutineLabel: {
        backgroundColor: '#e8e8e8',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 12
    },
    rutineTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#424874'
    },
    itemTimeContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    timeTitle: {
        color: '#555555',
        fontSize: 12
    }
});
