import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../redux/actions';
import './Login.css';

function Login(props) {
    const [user, setUser] = useState({
        login: '',
        password: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        if (props.auth) {
            navigate('/login/admin')
            localStorage.setItem('auth', props.auth)
        }
    }, [props.auth, navigate])
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const { login, password } = user;
        props.isLoggedIn(login, password);
        console.log(props.auth)
    }
        return (
            <div>
                <form className='form' onSubmit={(e) => submitHandler(e)}>
                    <label>Login: </label>
                    <input type='text' name='login' value={user.login} onChange={(e) => changeHandler(e)} required />
                    <label>Password: </label>
                    <input type='password' name='password' value={user.password} onChange={(e) => changeHandler(e)} required />
                    <input type='submit' className='submit-btn' value='Enter'/>
                </form>
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


const mapDispatchToProps = dispatch => ({
    isLoggedIn: (log, pass) => dispatch(isLoggedIn(log, pass))
  });
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(Login);