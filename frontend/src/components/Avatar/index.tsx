import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Badge, Avatar as ANTDAvatar }from 'antd';
import { UserOutlined } from '@ant-design/icons';
import getColor from './getColor';
import style from './avatar.module.scss'
import { getMe } from '../../redux/reducers/userReducer';

type AvatarProps = {
    isOnline?: boolean,
    avatar?: any,
    name: string
}

const ColorList = [
                  '#f56a00', '#7265e6', '#ffbf00', '#00a2ae', 'pink',
                  'red', 'yellow', 'orange', 'cyan', 'green', 
                  'blue', 'purple', 'geekblue', 'magenta', 'volcano',
                  'gold', 'lime',
]

const Avatar: React.FC<AvatarProps> = ({isOnline, avatar, name }) => {
  
    return (
        <div>
            {
            isOnline
            ? <NavLink to='/'>
                <Badge offset={[0,2]}color='green' dot>
                  {
                     avatar
                     ? <ANTDAvatar icon={<UserOutlined />} shape="circle" style={{minWidth: '25px'}}/>
                     : <ANTDAvatar 
                          style={{ backgroundColor: ColorList[getColor(name)], verticalAlign: 'middle', minWidth: '25px' }}  
                          shape="circle"
                        >
                          {
                            <div className={style.avatar_letter} style={{ backgroundColor: ColorList[getColor(name)]}}>
                              {  name?.slice(0,1).toUpperCase()}
                            </div>
                           
                          }
                        </ANTDAvatar>
                  }
                  
                </Badge>
              </NavLink>
            
            : <NavLink to='/'>
                {
                     avatar
                     ? <ANTDAvatar icon={<UserOutlined />} shape="circle" style={{minWidth: '25px'}}/>
                     : <ANTDAvatar 
                          style={{ backgroundColor: ColorList[getColor(name)], verticalAlign: 'middle', minWidth: '25px' }}  
                          shape="circle"
                        >
                          {
                            <div className={style.avatar_letter} style={{ backgroundColor: ColorList[getColor(name)] }}>
                              {  name?.slice(0,1).toUpperCase()}
                            </div>
                           
                          }
                        </ANTDAvatar>
                  }
              </NavLink>
        }
        </div>
    )
}

export default Avatar