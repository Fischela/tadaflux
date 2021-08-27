import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import "./App.css"
// import Login from '../src/views/auth/Login'
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import TermsAndCondition from './pages/termsandcondition';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import "react-toastify/dist/ReactToastify.css";
import ForgottenPassword from './pages/auth/ForgottenPassword';




// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (<>
          <Route exact path="/terms" component={TermsAndCondition} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotten/password" component={ForgottenPassword} />

          {/* <AppRoute exact path="/terms" component={TermsAndCondition} layout={LayoutDefault} /> */}

    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

          {/* <AppRoute exact path="/" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/" component={Register} layout={LayoutDefault} />
          <AppRoute exact path="/" component={ForgottenPassword} layout={LayoutDefault} /> */}

        </Switch>
      )} /></>
  );
}

export default App;