import React from 'react'
import style from './dialog.module.scss'
import { Col, Row, Layout, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {  Avatar } from '../../components';
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const Dialogs = (props:any) => {
    return (
        <div>
            <Row>
     
      <Col span={24}>
        <div className={style.message_wrapper}>
            <Avatar isOnline/>
            <Layout className={style.text_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={style.author_title}>{"Dubonossor"}</div>
                <div className={style.date_title}> {"23.24.6565"}</div>
            </div>
            <div className={style.message}> 
                it's message  it's message  
                
            </div>
            </Layout>
        </div>
        </Col>
        </Row>
        </div>
    )
}

export default Dialogs