import React, { useState } from 'react'
import { Row, Col, Layout, Input, Form, Button } from 'antd'
import { Block } from '../../../components'
import style from './login_form.module.css'
import { NavLink, Redirect } from 'react-router-dom'
import { UserOutlined, MailOutlined, LockOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import notification from '../../../components/Notification'

export const LoginFormContainer = (props:any) => {
  const[disabled, setButtonType] = useState(false)
  const[isValidate, setIsValidate] = useState(false)
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  if(props.userData.token){//localStorage.token
    return <Redirect to='/main_page/dialogs'/>
  }
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
                  <Form 
                    onFinish={(userData) => {
                      setButtonType(true)
                      props.authUser(userData).then((data: any) => {
                        
                      if(data == "Error"){
                        setButtonType(false)
                        notification({
                          text: "Incorrect email or password!",
                          type: 'error',
                          title: "Oops..."
                        })
                        console.log('error')
                      }else{
                        props.getMe()
                        console.log('ok')
                        setIsValidate(true)
                        notification({
                          text: "nice to meet you!)",
                          type: 'success',
                          title: "Success!",
                          duration: 5
                        })
                      }
                    } )}
                  }
                    onFinishFailed={onFinishFailed}>
                  <Form.Item
                      validateStatus={isValidate ? 'success' : ''}
                      name="email" 
                      rules={[{ required: true, 
                                message: 'Email is required!',
                                
                      }]}>
                      
                      <Input 
                        prefix={<MailOutlined style={{color: 'grey'}} className="site-form-item-icon" />}
                        style={{marginTop: '15px', backgroundColor: 'white'}} 
                        placeholder=' email'
                        
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
                         <Input.Password  prefix={<LockOutlined style={{color: 'grey'}} className="site-form-item-icon" />} placeholder='password'/>
                      </Form.Item>
                      <Form.Item>{
                        isValidate
                        ? <Button style={{ width: '100%'}} size='large'><CheckCircleTwoTone twoToneColor="#52c41a" />Success!</Button>
                        : <Button disabled={disabled} loading={disabled}htmlType="submit" style={{ width: '100%'}} type='primary' size='large'>Login</Button>
                        }
                        
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

export default LoginFormContainer