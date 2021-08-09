import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter as Router, Route ,browserHistory ,Redirect} from "react-router-dom";
import './App.css';

import DashBoard from './pages/dashBoard/index.js';
import Setting from './pages/setting/index.js';
import Messages from './pages/messages/index.js';

function App() {
  return (
    <div class = 'App'>
    <Router>
      <switch>
        <Route path="/dash" component={DashBoard}/>
        <Route path="/setting" component={Setting}/>
        <Route path="/messages" component={Messages}/>
        <Route  path="*">
            <Redirect to="/messages" />
           </Route>
      </switch>
    </Router>

    </div>
  );
}

export default App;

