import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import CoursePage from './components/course/CoursePage';
import Search from './components/search/Search';
import Table from './components/table/Table';
import Recommend from './components/recommend/Recommend';
import Notice from './components/notice/Notice';
import NoticeBoard from './components/notice/NoticeBoard';
import Chat from './components/chat/Chat';
import ChatRoom from './components/chat/ChatRoom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
              <Route path='/home' component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/table' component={Table} />
              <Route path='/recommend' component={Recommend} />
              <Route path='/notice/:id' component={NoticeBoard} />
              <Route path='/notice' component={Notice} />
              <Route path='/chat/:id' component={ChatRoom} />
              <Route path='/chat' component={Chat} />
              <Route path='/course/:id' component={CoursePage} />
              <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
