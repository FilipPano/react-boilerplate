import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from 'store';
import { HomePage } from 'pages/HomePage';
import { HOME_PAGE } from 'global/routes';
import { Provider } from 'react-redux';

const App = () => (
  <Router>
    <Provider store={store}>
      <>
        <Route
          exact
          path={HOME_PAGE}
          component={HomePage}
        />
      </>
    </Provider>
  </Router>
);

export default App;
