import React from 'react'
import style from './dialogs.module.scss'
import Icon, { FormOutlined, TeamOutlined } from '@ant-design/icons';
import { DialogItem } from '../../../components';
import { Layout, PageHeader, Button, Input } from 'antd';
import Header from '../../Header';

const { Search } = Input;

const Dialogs = (props:any) => {
    return (
        <div>
          <Layout className={style.dialogs_wrapper}>
          <div className="chat__sidebar">
            <div className={style.chat__sidebar_header}>
              <div>
                <TeamOutlined />
                <span style={{marginLeft: "5px"}}>Список диалогов</span>
              </div>
              <FormOutlined />
            </div>
          <div>
         <Search
            placeholder="input search user"
            onSearch={value => console.log(value)}
            style={{marginTop: "20px"}}
            
         />
         </div>
        </div >
        <div style={{marginTop: "15px"}}>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
        </div>
          </Layout>
        </div>
    )
}

export default Dialogs