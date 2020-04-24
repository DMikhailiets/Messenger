import React from 'react';
import style from './author_message.module.scss';
import { Comment, Tooltip, Avatar, Layout, Row, Col } from 'antd';
import moment from 'moment';
import classNames from "classnames";

// type MessageProps = {
//     author_name: string,
//     date: string,
//     message: string,

// }

const AuthorMessage: React.FC = (props) => {
return(
    <div>
        <Row>
          <Col span={24}>
          <div className={style.message_wrapper}>
        <div className={style.message_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className={style.date_title}> {"date"}</div>
              <div className={style.author_title}>{"author_name"}</div>
            </div>
            <div className={style.message}> 
                it's message  it's message 
            </div>
        </div>
        <Avatar style={{minWidth: '25px', marginLeft: '5px'}}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
    </div> 
          </Col>
        </Row> 
    </div>
    
)
}

export default AuthorMessage;
