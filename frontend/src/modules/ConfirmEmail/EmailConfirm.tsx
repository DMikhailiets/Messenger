import React from 'react'
import { Row, Col, Layout } from 'antd'
import { ExclamationCircleTwoTone } from '@ant-design/icons' 
import { Block, Button } from '../../components'
import style from './register_form.module.css'
import { NavLink } from 'react-router-dom'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

export const EmailConfirm = (props:any) => {
    return(
        <div>
            <Layout>
            <Row>
              <Col span={8}/>
              <Col className={style.login_form_wrapper}span={8}> 
                <Block className={style.block}>
                  <div>
                    <h2>Confirm your email</h2>
                  </div>
                  <ExclamationCircleTwoTone style={{fontSize: '50px'}}/>
                </Block>
              </Col>
              <Col span={8}/>
            </Row>
            </Layout>
        </div>
    )
}

export default EmailConfirm