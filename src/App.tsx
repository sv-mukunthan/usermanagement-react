import React, { Component, useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import { Route, Redirect, RouteProps, RouteComponentProps, BrowserRouter, Switch, useHistory } from "react-router-dom";
import Main from './common_components/hoc/main.hoc';
import Login from './screens/auth/login/login.screen';
import SignUp from './screens/auth/signup/signup.screen';
import User from './screens/user/user.screen';
import ForgetPassword from './screens/auth/forget_password/forget_password.screen';
import ResetPassword from './screens/auth/reset_password/reset_password.screen';

const token = localStorage.getItem("token");
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
  const history =  useHistory();
  // const [loggedIn, setloggedIn] = useState(false);

  // useEffect(() => {
  //   console.log("token", token)
  //   if(!token) {
  //     console.log("token illa");
  //     history.push('/login');
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={User} />
          <Route exact path="/forget_password" component={ForgetPassword} />
          <Route exact path="/reset_password/:hash" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
