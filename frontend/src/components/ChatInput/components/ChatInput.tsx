import React from 'react'
import style from './chat_input.module.scss'
import { Form, Input, Layout } from 'antd'
import { SendOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const { Search } = Input;

const ChatInput: React.FC = (props:any) => {
    return(
        <div className={style.chat_input}>
            <Layout className={style.input}>
                <Form>
                <Form.Item style={{marginBottom: 0}}name="note"> 
                <Search
                    
                    enterButton={<SendOutlined />}
                    placeholder="input search user"
                    onSearch={value => console.log(value)}
                />
                    </Form.Item>
            </Form> 
            </Layout>
           
        </div>
    )
}

export default ChatInput