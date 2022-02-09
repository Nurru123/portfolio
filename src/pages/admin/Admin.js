import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/actions'; 

import './Admin.css';

function Admin(props) {
    const navigate = useNavigate()
    const clickHandler = () => {
        props.logOut()
        navigate('/')
    }

    return (
        <div>
            <div>Welcome!</div>
            <button onClick={() => {clickHandler()}}>Logout</button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Admin);