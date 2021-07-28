import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import { Route, Redirect, RouteProps, RouteComponentProps, BrowserRouter, Switch } from "react-router-dom";
import Main from './common_components/hoc/main.hoc';
import Test from './screens/test/test.screen';
interface Props extends RouteProps {
  component: any;
}

const NavRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Main>
          <Component {...props} />
        </Main>}
    />
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <NavRoute exact path="/users" component={Test} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
