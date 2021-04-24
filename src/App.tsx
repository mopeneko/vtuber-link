import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import GeneratedRoutes, { RouteConfig } from './routes/routes';
import { Route } from 'react-router';

const generatedRoutePaths = Object.keys(RouteConfig);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={generatedRoutePaths}>
            <GeneratedRoutes />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
