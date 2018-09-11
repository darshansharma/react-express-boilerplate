import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './app';
import Page404 from './page404';

class Routing extends React.Component {
render(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/app' component={App} />
        <Route path='*' component={Page404} />
      </Switch>
    </Router>
  );
}
}

ReactDOM.render(<Routing />, document.getElementById('app'));
