import React, { Component } from "react";
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class StudentContainer extends Component {
    static propTypes = {
        ListPartnerStudents: PropTypes.func,
        ListZoneStudents: PropTypes.func,
        ListExamplesStudents: PropTypes.func,
        activeButtonPartner: PropTypes.Object
	}

    render() {
        return (
            <View
                style={[styles.conainer]}
            >
                { this.props.activeButtonPartner.showExplamplelist &&
                    <>
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => this.props.ListPartnerStudents()}
                        >
                            <Text style={[styles.buttonText]}>Compañeros</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.active]}
                            onPress={() => this.props.ListExamplesStudents()}
                        >
                            <Text style={[styles.buttonText, styles.activeText]}>Ejemplos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.ListZoneStudents()}
                            style={[styles.button]}
                        >
                            <Text style={[styles.buttonText]}>Zona</Text>
                        </TouchableOpacity>
                    </>
                }

                { this.props.activeButtonPartner.showPartnerList &&
                    <>
                        <TouchableOpacity
                            style={[styles.button, styles.active]}
                            onPress={() => this.props.ListPartnerStudents()}
                        >
                            <Text style={[styles.buttonText, styles.activeText]}>Compañeros</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => this.props.ListExamplesStudents()}
                        >
                            <Text style={[styles.buttonText]}>Ejemplos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.ListZoneStudents()}
                            style={[styles.button]}
                        >
                            <Text style={[styles.buttonText]}>Zona</Text>
                        </TouchableOpacity>
                    </>
                }

                { this.props.activeButtonPartner.showZoneList &&
                    <>
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => this.props.ListPartnerStudents()}
                        >
                            <Text style={[styles.buttonText]}>Compañeros</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => this.props.ListExamplesStudents()}
                        >
                            <Text style={[styles.buttonText]}>Ejemplos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.active]}
                            onPress={() => this.props.ListZoneStudents()}
                        >
                            <Text style={[styles.buttonText, styles.activeText]}>Zona</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        );
    }
};

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
