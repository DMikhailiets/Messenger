import React from 'react'
import { Row, Col, Layout, Input } from 'antd'
import { Block, Button } from '../../../components'
import style from './login_form.module.css'
import { NavLink } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export const LoginForm = (props:any) => {
    return(
        <div>
            <Layout>
            <Row>
              <Col span={8}/>
              <Col className={style.login_form_wrapper}span={8}> 
                <Block className={style.block}>
                  <div>
                    <h2>Join your account</h2>
                  </div>
                  <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{marginTop: '15px'}}/>
                  <Input  prefix={<LockOutlined className="site-form-item-icon" />} style={{marginTop: '15px'}} placeholder=' password' type='password'/>
                  <Button style={{marginTop: '15px', width: '100%'}} type='primary' size='large'> Login </Button>
                  <NavLink to='/registration' style={{marginTop: '15px'}}>register now</NavLink>
                </Block>
              </Col>
              <Col span={8}/>
            </Row>
            </Layout>
        </div>
    )
}

