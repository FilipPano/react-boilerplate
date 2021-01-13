import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { queryCache, store } from 'store';
import { HomePage } from 'pages/HomePage';
import { HOME_PAGE } from 'global/routes';
import { Provider } from 'react-redux';
import { ReactQueryCacheProvider } from 'react-query';

const App = () => (
  <Router>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Provider store={store}>
        <Switch>
          <Route
            exact
            path={HOME_PAGE}
            component={HomePage}
          />
        </Switch>
      </Provider>
    </ReactQueryCacheProvider>
  </Router>
);

export default App;
