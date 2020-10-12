import React from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import './App.scss';
import ConfigPage from './Pages/ConfigPage';
import LoginPage from './Pages/LoginPage';
import NotFoundPage from './Pages/NotFoundPage';
import ProductDetailPage from './Pages/ProductsPage/ProductDetailPage';
import SearchFormPage from './Pages/SearchFormPage';
import ProductsPage from './Pages/ProductsPage';
import ProductDatabasePage from './Pages/ProductsPage/ProductDatabasePage';

const AuthorizedRoute = (props) => {
  const logged = localStorage.get('isLoggedIn');

  if (logged === null) {
    return <div>Loading</div>;
  } else if (logged === false) {
    return <Redirect to='/auth' />;
  }

  return <Route {...props} />;
};

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route path='/auth' component={UnauthorizedLayout} />

        {/* <Route path='/' component={AuthorizedLayout} /> */}
        {/* <Route
          path='/'
          render={(props) => {
            return <AuthorizedLayout {...props} />;
          }}
        /> */}
        <Route path='/'>
          {(props) => {
            return <AuthorizedLayout {...props} />;
          }}
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

const AuthorizedLayout = () => (
  <div className='authorized-layout'>
    <header>
      <NavLink activeClassName='active' to='/dashboard'>
        Dashboard
      </NavLink>
      <NavLink activeClassName='active' to='/products'>
        Products
      </NavLink>
      <NavLink activeClassName='active' to='/auth'>
        Logout
      </NavLink>
    </header>
    <div className='content'>
      <Switch>
        <Route path='/dashboard' component={DashboardLayout} />
        <Route path='/products' component={ProductsLayout} />
        <Redirect to='/dashboard' />
      </Switch>
    </div>
    <footer />
  </div>
);

const UnauthorizedLayout = () => (
  <div className='unauthorized-layout'>
    <Switch>
      <Route path='/' component={LoginPage} />
    </Switch>
  </div>
);

const DashboardLayout = () => (
  <div className='dashboard-layout'>
    <aside>
      <Switch>
        <Route path='/dashboard/settings' component={ConfigPage} />
        <Route path='/dashboard/search' component={SearchFormPage} />
      </Switch>
    </aside>
    <div className='content'>
      <nav>
        <Link to='/dashboard/settings'>Settings</Link>
        <Link to='/dashboard/search'>Search</Link>
      </nav>
      <main>
        <Switch>
          <Route path='/dashboard/settings' component={SettingsPage} />
          <Route path='/dashboard/search' component={SearchResultsPage} />
          <Redirect to='/dashboard/settings' />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </main>
    </div>
  </div>
);

const ProductsLayout = () => {
  const { path } = useRouteMatch();
  return (
    <div className='products-layout'>
      <Switch>
        <Route path={`${path}`} component={ProductsPage} exact />
        <Route path={`${path}/:productId`} component={ProductsSubLayout} />
      </Switch>
    </div>
  );
};
const ProductsSubLayout = () => {
  const { path } = useRouteMatch();
  return (
    <div className='products-layout'>
      <Switch>
        <Route path={`${path}`} component={ProductDetailPage} exact />
        <Route path={`${path}/overview`}>Overview</Route>
        <Route
          path={`${path}/database/:databaseType`}
          component={ProductDatabasePage}
        />
      </Switch>
    </div>
  );
};

const SettingsPage = () => (
  <div className='settings-page'>
    <div />
    <div />
  </div>
);

const SearchResultsPage = () => (
  <div className='search-results-page'>
    <div />
    <div />
    <div />
  </div>
);

export default App;
