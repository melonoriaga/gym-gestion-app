import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import StudentFilter from './StudenFilters';
import StudenItem from './StudenItem';
import StudentsSwitch from './StudentsSwitch';
import alumnos from '../../model/alumnos';
import { ScrollView } from 'react-native-gesture-handler';

export default function StudentContainer() {
    return (
        <View style={styles.container}>
            {/* <StudentFilter /> */}

            <View style={styles.inputContainer}>

                <Ionicons
                    style={styles.inputIcon}
                    name="md-search"
                    color="#424874"
                    size={20}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Buscar"
                />
            </View>


            <StudentsSwitch />

            <ScrollView>
                <FlatList
                    data={alumnos}
                    renderItem={({item}) => <StudenItem items={item} />}
                />
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginHorizontal: 14,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    inputIcon: {
        marginRight: 12,
    }
});
