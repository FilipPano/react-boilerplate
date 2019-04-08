import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store/index';
import ScrollToTop from './ScrollToTop';
import HomePage from './pages/HomePage';
import Routes from './global/routes';

const App = () => (
  <Router>
    <ScrollToTop>
      <Provider store={store}>
        <React.Fragment>
          <Route exact path={Routes.HOME_PAGE} component={HomePage} />
        </React.Fragment>
      </Provider>
    </ScrollToTop>
  </Router>
);

export default App;
