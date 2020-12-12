import React, { useState } from 'react';

import LoginScreen from '../screens/Login';

import { connect } from 'react-redux';
import { binActionCreators } from 'redux';
import { actionCreations as actions } from '../actions/actions';
import Login from '../screens/Login';

function mapStateToProps(state) {
    const { username, password, email } = state;

    return {
        username, password, email
    };
}

function mapDispacthToProps(dispach) {
    return {
        login: binActionCreators(actions.longin, dispach)
    }
}

function LoginApp()

export default connect(mapStateToProps, mapDispacthToProps)(<LoginScreen handleButton={() => {LoginApp()}} />);