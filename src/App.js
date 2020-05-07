import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import CoursePage from './components/course/CoursePage';
import Search from './components/search/Search';
import Table from './components/table/Table';
import Recommend from './components/recommend/Recommend';

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
              <Route path='/chat' component={Home} />
              <Route path='/notice' component={Home} />
              <Route path='/course/:id' component={CoursePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
