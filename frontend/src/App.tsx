import React from 'react';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import { Auth, MainPage } from './pages';


function App() {
  return (
    <div className="App">
      <Route exact path={["/", "/registration"]} render = { () => <Auth/>}/>
      <Route path="/main_page" render = { () => <MainPage/>}/>
    </div>
  );
}

export default App;