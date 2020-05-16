import React from 'react';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import { Auth, MainPage } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      
      <Route exact path={["/", "/registration", "/registration/confirm"]} render = { () => <Auth/>}/>
      <Route path="/main_page" render = { () => <MainPage/>}/>
    
    </div>
  );
}

export default App;