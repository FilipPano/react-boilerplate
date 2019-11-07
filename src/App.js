import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import HomePage from 'pages/HomePage';
import Routes from 'global/Routes';

const App = () => (
  <Router>
    <Provider store={store}>
      <>
        <Route
          exact
          path={Routes.HOME_PAGE}
          component={HomePage}
        />
      </>
    </Provider>
  </Router>
);

export default App;
