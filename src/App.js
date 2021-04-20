import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

//components
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

//routes
import routes from './routes';

//dinamick pages грузятся асинхронно!!!
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
class App extends Component {
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.contacts} component={ContactsPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
