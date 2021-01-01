import React from 'react';
import {createBrowserHistory} from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import FrontPage from '../Pages/FrontPage';
import Investment from '../Pages/Investment';
import Loan from '../Pages/Loans';
import Insurance from '../Pages/Insurance';
import Disclaimer from '../Pages/Disclaimer';

export default class PageHandler extends React.Component{

  render()
  {
    const hist = createBrowserHistory();
    return(
      <Router history={hist}>
        <Switch>
          <Redirect from="/" exact={true} to="/Front" />
          <Route path="/Front" component={FrontPage} />
          <Route path="/Insurance" component={Insurance} />
          <Route path="/Investment" component={Investment} />
          <Route path="/Loan" component={Loan} />
          <Route path="/Disclaimer" component={Disclaimer} />
        </Switch>
      </Router>
    );
  };
};
