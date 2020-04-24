import React from 'react'
import style from './header.module.scss'
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { DialogItem } from '../../../components';
import { Layout } from 'antd';


const Header = (props:any) => {
    return (
        <div className={style.header_wrapper}>
         <TeamOutlined />
        </div>
    )
}

export default Header