import * as React from 'react';
import {View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import StudentFilter from './StudenFilters';
import StudenPartnerItem from './StudenPartnerItem';
import StudenZoneItem from './StudenZoneItem';
import StudentsSwitch from './StudentsSwitch';
import alumnos from '../../model/alumnos';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function StudentContainer({pressStudentDetail, pressStudentZoneDetail}) {
    const [data, setData] = React.useState({
        showPartnerList: true,
        showExplamplelist: false,
        showZoneList: false,
    });

    const HandleListPartnerStudents = () => {
        setData({
            ...data,
            showPartnerList: true,
            showExplamplelist: false,
            showZoneList: false
        });
    };

    const HandleListZoneStudents = () => {
        setData({
            ...data,
            showPartnerList: false,
            showExplamplelist: false,
            showZoneList: true
        });
    };

    const HandleListExamples = () => {
        setData({
            ...data,
            showPartnerList: false,
            showExplamplelist: true,
            showZoneList: false
        })
    }

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

            <StudentsSwitch
                ListPartnerStudents={() => {HandleListPartnerStudents()}}
                ListZoneStudents={() => {HandleListZoneStudents()}}
                ListExamplesStudents={() => {HandleListExamples()}}
                activeButtonPartner={data}
            />

            <ScrollView>
                { data.showExplamplelist &&
                    <FlatList
                        data={alumnos}
                        renderItem={({item}) =>
                            <TouchableOpacity
                                onPress={ () => pressStudentZoneDetail()}
                            >
                                <StudenPartnerItem items={item} />
                            </TouchableOpacity>
                        }
                    />
                }

                { data.showPartnerList &&
                    <FlatList
                        data={alumnos}
                        renderItem={({item}) =>
                            <TouchableOpacity
                                onPress={ () => pressStudentDetail()}
                            >
                                <StudenPartnerItem items={item} />
                            </TouchableOpacity>
                        }
                    />
                }

                { data.showZoneList &&
                    <FlatList
                        data={alumnos}
                        renderItem={({item}) =>
                            <TouchableOpacity
                                onPress={ () => pressStudentZoneDetail()}
                            >
                                <StudenZoneItem items={item} />
                            </TouchableOpacity>
                        }
                    />
                }
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
