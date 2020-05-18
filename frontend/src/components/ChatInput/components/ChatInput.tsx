import React, { useState } from 'react'
import style from './chat_input.module.scss'
import { Form, Input, Layout } from 'antd'
import { SendOutlined, FileAddOutlined, SmileOutlined, AudioOutlined } from '@ant-design/icons'


const { Search } = Input;

type ChatInputProps = {
    sendMessage: Function,
    dialogId: string
}




const ChatInput: React.FC<ChatInputProps> = ({sendMessage, dialogId}, props:any) => {
    const [form] = Form.useForm()
      const onFinish = (value: any) => {
        sendMessage({ text:value, dialog_id: dialogId})
        form.resetFields()
      }
    return(
        <div className={style.chat_input}>
            <Layout style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: "white"}}className={style.input}>
                {/* <SmileOutlined className={style.icons_button} />
                <AudioOutlined className={style.icons_button} style={{marginLeft: "5px"}}/>
                <FileAddOutlined className={style.icons_button} style={{marginLeft: "5px", marginRight: "5px"}}/> */}
               
                <Form form={form} style={{marginBottom: 0, flexGrow: 2}}
                >
                
                <Form.Item  style={{marginBottom: 0}}name="note"> 
                  
                <Search
                    enterButton={<SendOutlined />}
                    placeholder="your message"
                    onSearch={onFinish}
                />
                    </Form.Item>
            </Form> 
            </Layout>
        </div>
    )
}

export default ChatInput