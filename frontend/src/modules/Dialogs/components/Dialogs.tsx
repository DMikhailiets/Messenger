import React from 'react'
import style from './dialogs.module.scss'
import { Col, Row, Avatar, Layout, Badge } from 'antd'


const Dialogs = (props:any) => {
    return (
        <div>
            <Row>
     
      <Col span={24}>
        <div className={style.message_wrapper}>
            <Avatar style={{minWidth: '25px', marginLeft: '5px'}}/>
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
        <div className={style.message_wrapper}>
        <Badge offset={[0,2]}color='green' dot>
        <Avatar shape="circle" style={{minWidth: '25px', marginLeft: '5px'}}/>
        </Badge>
            
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