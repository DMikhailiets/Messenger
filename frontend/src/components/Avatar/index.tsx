import React from 'react'
import { NavLink } from 'react-router-dom';
import { Badge, Avatar as ANTDAvatar }from 'antd';
import { UserOutlined } from '@ant-design/icons';

type AvatarProps = {
    isOnline?: boolean
}
const Avatar: React.FC<AvatarProps> = ({isOnline}) => {
    return (
        <div>
            {
            isOnline
            ? <NavLink to='/'>
                <Badge offset={[0,2]}color='green' dot>
                  <ANTDAvatar icon={<UserOutlined />} shape="circle" style={{minWidth: '25px', marginLeft: '5px'}}/>
                </Badge>
              </NavLink>
            
            : <NavLink to='/'>
                <ANTDAvatar icon={<UserOutlined />} style={{minWidth: '25px', marginLeft: '5px'}}/>
              </NavLink>
        }
        </div>
    )
}

export default Avatar