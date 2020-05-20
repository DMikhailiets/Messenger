import React, { useState, useEffect } from 'react'
import style from './main_page.module.css'
import { Layout, Menu, Badge, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileDoneOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { NavLink, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DialogsPage from '../../../pages/dialogs_page'
import { Avatar } from '../../../components'
import notification from '../../../components/Notification';


const { Sider } = Layout;

type MainPageProps = {
  getMe: Function,
  user: {
   fullname: string,
   _id: string,
  isOnline: boolean,
  },
  logout: Function
}

const MainPage: React.FC<MainPageProps> = ({user, getMe, logout}, props:any) => {
  
  useEffect(() => {
    if(user.fullname == 'User'){
      getMe()
      notification({
        text: "nice to meet you!)",
        type: 'success',
        title: "Success!",
        duration: 5
      })
    }
  },[user])
  let [ collapsed, setEditMode ] = useState(true);
  let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
  }
  if(!localStorage.token){
    return (
      <Redirect to='/'/>
    )
  }
  
      return (
      
        <Layout style={{ minHeight: '100vh' }}>
          {
            (user.fullname === 'User')
            ? <LoadingOutlined />
            : <>
            <Sider width={130}  collapsedWidth={80} collapsed={collapsed} onCollapse={changeEditMode} onMouseEnter={() => (setEditMode(false))} onMouseLeave={() => (setEditMode(true))}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"> 
              {
                collapsed 
                ? <div className={style.user_side_bar_dropped}key="8"><div className={style.user_side_bar_collapsed}>
                   <Avatar name={user.fullname}/>
                  </div>
                  </div>
                : <div style={{marginLeft: '5px'}} className={style.user_side_bar}>
                    <Avatar  name={user.fullname}/>
              <span className={style.avatext} style={{marginLeft: '5px'}}>{user.fullname}</span>
                  </div>
              }
              <Menu.Item key="1">
                <NavLink to="/main_page/dialogs">
                  <DesktopOutlined />
                  <span>Dialogs</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/main_page/logistics">
                  <PieChartOutlined />
                  <span>Settings</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item onClick={() => logout()}key="3">
                <NavLink to="/main_page/orders">
                <FileDoneOutlined/>
                  <span>Logout</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
          {/* <Row>
            <Col span={4}/>
            <Col span={16}>
            <Route path="/main_page/dialogs" render = { () => <DialogsPage/>}/>
            <Route path="/main_page/logistics" render = { () => <div>Hi</div>}/>
            <Route path="/main_page/orders" render = { () => <div>Hi</div>}/>
            </Col>
            <Col span={4}/>
          </Row> */}
          <Route path="/main_page/dialogs/" render = { () => <DialogsPage/>}/>
            <Route path="/main_page/logistics" render = { () => <div>Hi</div>}/>
            <Route path="/main_page/orders" render = { () => <div>Hi</div>}/>
          </Layout>
              </>
          }
         
        </Layout>
      );
    
  }

export default MainPage