import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/actions';

import './Admin.css';

function Admin(props) {
    const navigate = useNavigate()

    useEffect(() => {
        if (!props.auth) {
            localStorage.removeItem('auth')
            navigate('/login')
        }
    }, [props.auth, localStorage.auth])

    const clickHandler = () => {
        props.logOut()
    }

    return (
        <div className='admin-inner'>
            <div className='welcome'>
                <div>Welcome!</div>
                <form className='download'>
                    <input type='file' accept=".png, .jpg, .jpeg" />
                    <button type='submit'>Upload</button>
                </form>
                <div>or</div>
                <button className='btn-out' onClick={() => clickHandler()}>Log out</button>
            </div>
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