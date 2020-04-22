import React from 'react'
import { Row, Col, Layout, Input } from 'antd'
import { Block, Button } from '../../../components'
import style from './register_form.module.css'
import { NavLink } from 'react-router-dom'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

export const RegisterForm = (props:any) => {
    return(
        <div>
            <Layout>
            <Row>
              <Col span={8}/>
              <Col className={style.login_form_wrapper}span={8}> 
                <Block className={style.block}>
                  <div>
                    <h2>Join Us</h2>
                  </div>
                  <Input prefix={<MailOutlined className="site-form-item-icon" />}style={{marginTop: '15px'}} placeholder=' email'/>
                  <Input prefix={<UserOutlined className="site-form-item-icon" />}style={{marginTop: '15px'}} placeholder=' email'/>
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} style={{marginTop: '15px'}} placeholder=' password' type='password'/>
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} style={{marginTop: '15px'}} placeholder=' repeat password' type='password'/>
                  <Button style={{marginTop: '15px', width: '100%'}} type='primary' size='large'> Register now </Button>
                </Block>
              </Col>
              <Col span={8}/>
            </Row>
            </Layout>
        </div>
    )
}

