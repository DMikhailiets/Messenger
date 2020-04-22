import React from 'react'
import { Block, Button } from '../../components'
import { Row, Col, Layout, Input } from 'antd';
import style from './authorisation.module.css'
import { NavLink, Route } from 'react-router-dom'
import RegisterForm from '../../modules/RegisterForm'
import LoginForm from '../../modules/LoginForm'
const Auth = (props: any) => {     
  return(
    <div className={style.content_wrapper} style={{ minHeight: '100vh' }}>
      <Route path="/registration" render = { () => <RegisterForm/>}/>
      <Route exact path="/" render = { () => <LoginForm/>}/>
    </div>
  )
  }
 
export default Auth