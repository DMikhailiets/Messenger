import { fetchUserData } from '../../../redux/selectors/userInfoSelector';
import { AppState } from '../../../redux/store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import  LoginFormComponent  from '../components/LoginForm'
import { withFormik } from 'formik';
import axios from '../../../core/axios'
import { authUser } from '../../../redux/reducers/userReducer';
import React from 'react';



const LoginForm = (props: any) => {
  let authUser = (userData:any) => {
    props.authUser(userData)
  }
  return <LoginFormComponent hanleSubmit={authUser}{...props}/>
}

export default LoginForm

