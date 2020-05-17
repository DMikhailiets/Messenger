import React from 'react'
import { Row, Col, Layout } from 'antd'
import { ExclamationCircleTwoTone } from '@ant-design/icons' 
import style from '../RegisterForm/components/register_form.module.css'
import { NavLink, Redirect } from 'react-router-dom'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';


import { Result, Button } from 'antd';


export const EmailConfirm = (props:any) => {
    return(
      <div  style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Result
          status="success"
          title="Success!"
          subTitle="Registration was successful! Check your email to confirm your account!"
          extra={[
            <NavLink to='/'>
              <Button type="primary" key="console">  Authorization page </Button>
            </NavLink>
          ]}
        />
      </div>
    )
}

export default EmailConfirm