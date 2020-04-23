import React, { useEffect } from 'react'
import { Row, Col, Layout, Input, Form, Button } from 'antd'
import { Block } from '../../../components'
import style from './register_form.module.css'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';


export const RegisterForm = (props) => {
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
                    <h2>Join Us</h2>
                  </div>
                 
                  <Form onFinish={handleSubmit}>
                    <Form.Item
                      id="email"
                      name={["email"]} 
                      rules={[{ required: true,
                                type: 'email',
                                message: 'Incorrect email'
                      }]}>
                      
                      <Input 
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        style={{marginTop: '15px'}} 
                        placeholder=' email'
                        onChange={handleChange} 
                      />
                    </Form.Item>
                    <Form.Item
                      onChange={handleChange}
                      name="fullname"
                      rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder=' username'/>
                    </Form.Item>
                    <Form.Item
                      onChange={handleChange}
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback>
                         <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='password'/>
                      </Form.Item>
                      <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                              
                              required: true,
                              message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                              validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                              },
                            }),
                        ]}
                      >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='confirm password' />
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType="submit" style={{marginTop: '15px', width: '100%'}} type='primary' size='large'> Register now </Button>
                      </Form.Item>
                  </Form>
                </Block>
              </Col>
              <Col span={8}/>
            </Row>
            </Layout>
        </div>
    )
}

