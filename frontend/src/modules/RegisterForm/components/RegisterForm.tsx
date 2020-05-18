import React, { useState } from 'react'
import { Row, Col, Layout, Input, Form, Button } from 'antd'
import { Block } from '../../../components'
import style from './register_form.module.css'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { Redirect, NavLink } from 'react-router-dom'
import Notification from '../../../components/Notification'


type RegisterFormProps = {
  registrationUser: Function
}

export const RegisterForm: React.FC<RegisterFormProps> = ({registrationUser}) => {
  const[confirmStatus, setConfirmStatus] = useState(false)
  if(confirmStatus){
    return <Redirect to='/registration/confirm'/>
  }
  //console.log(props)
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
                 
                  <Form onFinish={(value) => {registrationUser(value).then((data: any) => {
                        if(data == "Error"){
                          Notification({
                            text: "This Email already exist!",
                            type: 'error',
                            title: "Oops..."
                          })
                          console.log('error')
                        }else {
                          setConfirmStatus(true)
                        }
                      })}}>
                    <Form.Item
                      // dependencies={['email']}
                      style={{display: "flex", alignItems: 'center'}}
                      id="email"
                      name={["email"]} 
                      
                      rules={[{ 
                                required: true,
                                type: 'email',
                                message: 'Incorrect email'
                      },
                      () => ({
                        validator(rule, value) {
                          console.log(value)
                          if ( !value || value.length <= 45) {
                            return Promise.resolve();
                          }
                          return Promise.reject('Email is too long! Maximym length of Email is 45 symbols');
                        },
                      })]}
                      hasFeedback>
                      
                      <Input 
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        allowClear={true}
                        placeholder='email'
                       
                      />
                    </Form.Item>
                    <Form.Item
                      
                      name="fullname"
                      rules={[{ required: true, message: 'Please input your username!' },
                      () => ({
                        validator(rule, value) {
                          if (!value || /^(?=.{3,})/.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject('Username is too short! ');
                        },
                      }),
                      () => ({
                        validator(rule, value) {
                          console.log(value)
                          if ( !value || value.length <= 15) {
                            return Promise.resolve();
                          }
                          return Promise.reject('Password is too long! Maximym length of Username is 15 symbols');
                        },
                      })
                    ]}
                      hasFeedback>
                        
                        <Input allowClear={true} prefix={<UserOutlined className="site-form-item-icon" />} placeholder=' username'/>
                    </Form.Item>
                    <Form.Item
                      
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                          
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                              return Promise.resolve();
                            }
                            return Promise.reject('Password is too simple! Password must contain at least one number, one letter of the English alphabet in upper and lower case');
                          },
                        }),
                        () => ({
                          validator(rule, value) {
                            console.log(value)
                            if ( !value || value.length <= 15) {
                              return Promise.resolve();
                            }
                            return Promise.reject('Password is too long! Maximym length of Password is 15 symbols');
                          },
                        })
                      ]}
                      hasFeedback>
                         <Input.Password allowClear={true} prefix={<LockOutlined className="site-form-item-icon" />} placeholder='password'/>
                      </Form.Item>
                      <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                              
                              required: true,
                              message: 'Please confirm your password! ',
                            },
                            ({ getFieldValue }) => ({
                              validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                              },
                            }),
                            () => ({
                              validator(rule, value) {
                                if (!value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                                  return Promise.resolve();
                                }
                                return Promise.reject('Password is too simple! ');
                              },
                            }),
                            () => ({
                              validator(rule, value) {
                                console.log(value)
                                if ( !value || value.length <= 15) {
                                  return Promise.resolve();
                                }
                                return Promise.reject('Username is too long! Maximym length of Password is 15 symbols');
                              },
                            })
                        ]}
                      >
                        <Input.Password allowClear={true} prefix={<LockOutlined className="site-form-item-icon" />} placeholder='confirm password' />
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType="submit" style={{marginTop: '15px', width: '100%'}} type='primary' size='large'> Register now </Button>
                      </Form.Item>
                  </Form>
                  <NavLink to='/'>on authotisation page</NavLink>
                </Block>
              </Col>
              <Col span={8}/>
            </Row>
            </Layout>
        </div>
    )
}

