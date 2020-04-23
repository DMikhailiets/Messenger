import React from 'react'
import { Row, Col, Layout, Input, Form, Button } from 'antd'
import { Block } from '../../../components'
import style from './login_form.module.css'
import { NavLink } from 'react-router-dom'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

export const LoginForm = (props:any) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  console.log(props)
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
                  <Form onFinish={handleSubmit}>
                  <Form.Item
                      
                      name="login" 
                      rules={[{ required: true, message: 'Email is required!'}]}>
                      
                      <Input 
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        style={{marginTop: '15px'}} 
                        placeholder=' email'
                        onChange={handleChange} 
                      />
                      </Form.Item>
                      <Form.Item
                      
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      >
                         <Input.Password onChange={handleChange} prefix={<LockOutlined className="site-form-item-icon" />} placeholder='password'/>
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType="submit" style={{ width: '100%'}} type='primary' size='large'>Login</Button>
                      </Form.Item>
                  </Form>
                  <NavLink to='/registration' style={{ }}>register now</NavLink>
                </Block>
              </Col>
              <Col span={8}/>
            </Row>
            </Layout>
        </div>
    )
}

