import React from 'react';
import './App.scss';
import NewsContainer from "./components/News/NewsContainer";
import {Route, Router, Switch} from "react-router-dom";
import history from './utils/history'
import Main from "./components/Main/Main";

function App() {
  return (
      <Router history={history}>
        <Main />
        <Switch>
          {/*<Route exact path="/a" component={NewsContainer} />*/}
        </Switch>
      </Router>
  );
}

export default App;
