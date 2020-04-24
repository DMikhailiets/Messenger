import React, { useState } from 'react'
import style from './main_page.module.css'
import { Layout, Menu, Badge } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { NavLink, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dialogs from '../../../modules/Dialogs'
import { Avatar } from '../../../components'


const { Sider } = Layout;

const MainPage = (props:any) => {
  
  let [ collapsed, setEditMode ] = useState(false);
  let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
  }
  // if(!props.authData){
  //   return (
  //     <Redirect to='/'/>
  //   )
  // }
  
      return (
      
        <Layout style={{ minHeight: '100vh' }}>
         <Sider width={130} collapsible collapsedWidth={80} collapsed={collapsed} onCollapse={changeEditMode}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              
              {
                collapsed 
                ? <div className={style.user_side_bar_dropped}key="8"><div className={style.user_side_bar_collapsed}>
                   <Avatar/>
                  </div>
                  </div>
                : <div className={style.user_side_bar}>
                    <Avatar/>
                    <span className={style.avatext} style={{marginLeft: '5px'}}>Denis</span>
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
                  <span>Logistics</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/main_page/orders">
                <FileDoneOutlined/>
                  <span>Orders</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Route path="/main_page/dialogs" render = { () => <Dialogs/>}/>
            <Route path="/main_page/logistics" render = { () => <div>Hi</div>}/>
            <Route path="/main_page/orders" render = { () => <div>Hi</div>}/>
          </Layout>
        </Layout>
      );
    
  }

export default MainPage