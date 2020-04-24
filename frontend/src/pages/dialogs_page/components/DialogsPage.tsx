import React from 'react'
import { Row, Col } from 'antd';
import style from './dialogs_page.module.scss'
import { DialogItem } from '../../../components';
import AuthorMessage from '../../../components/Message/AuthorMessage';
import SomeMessage from '../../../components/Message/SomeMessage';
import Messages from '../../../modules/Messages'
import Dialogs from '../../../modules/Dialogs';
const DialogsPage: React.FC =  (props: any ) => {
    return (
       <div>
       <Row>
          <Col span={8}>
            <Dialogs/>
          </Col>
          <Col span={16}>
            <Messages/>
          </Col>
        </Row>
       </div>
    )
}

export default DialogsPage