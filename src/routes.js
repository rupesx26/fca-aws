import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import PageLoader from "./components/loader";
// import { AnimatePresence } from 'framer-motion';

const LoadableHome = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'home' */ "./pages/Home"),
  loading: () => <PageLoader />
});

const LoadableDifference = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'difference' */ "./pages/difference"),
  loading: () => <PageLoader />
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'work' */ "./pages/work"),
  loading: () => <PageLoader />
});

const LoadableWorkNew = Loadable({
  loader: () => import(/* webpackChunkName: 'workNew' */ "./pages/workNew"),
  loading: () => <PageLoader />
});

const LoadableConnect = Loadable({
  loader: () => import(/* webpackChunkName: 'connect' */ "./pages/connect"),
  loading: () => <PageLoader />
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ "./pages/nopage"),
  loading: () => <PageLoader />
});

const LoadableHrx = Loadable({
  loader: () => import(/* webpackChunkName: 'hrx' */ "./pages/hrx"),
  loading: () => <PageLoader />
});

const LoadableNiharGold = Loadable({
  loader: () => import(/* webpackChunkName: 'nihargold' */ "./pages/nihargold"),
  loading: () => <PageLoader />
});

const LoadableKateSpade = Loadable({
  loader: () => import(/* webpackChunkName: 'katespade' */ "./pages/katespade"),
  loading: () => <PageLoader />
});

const LoadableThambbi = Loadable({
  loader: () => import(/* webpackChunkName: 'thambbi' */ "./pages/thambbi"),
  loading: () => <PageLoader />
});

const LoadableHero = Loadable({
  loader: () => import(/* webpackChunkName: 'hero' */ "./pages/hero"),
  loading: () => <PageLoader />
});

const LoadableCoco = Loadable({
  loader: () => import(/* webpackChunkName: 'coco' */ "./pages/cocosoul"),
  loading: () => <PageLoader />
});

const LoadableSussegado = Loadable({
  loader: () => import(/* webpackChunkName: 'sussegado' */ "./pages/sussegado"),
  loading: () => <PageLoader />
});

const LoadableRapidrupee = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'rapidrupee' */ "./pages/rapidrupee"),
  loading: () => <PageLoader />
});

const LoadableGravity = Loadable({
  loader: () => import(/* webpackChunkName: 'gravity' */ "./pages/gravity"),
  loading: () => <PageLoader />
});

const LoadableCareers = Loadable({
  loader: () => import(/* webpackChunkName: 'career' */ "./pages/careers"),
  loading: () => <PageLoader />
});

const LoadableCareersInternal = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'career' */ "./pages/careers/internal"),
  loading: () => <PageLoader />
});

const LoadablePolicy = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'policy' */ "./pages/policy/policy"),
  loading: () => <PageLoader />
});

const LoadableTerms = Loadable({
  loader: () => import(/* webpackChunkName: 'terms' */ "./pages/policy/terms"),
  loading: () => <PageLoader />
});

const LoadableLogin = Loadable({
  loader: () => import(/* webpackChunkName: 'login' */ "./pages/login"),
  loading: () => <PageLoader />
});

const LoadableLifeBuoy = Loadable({
  loader: () => import(/* webpackChunkName: 'lifebuoy' */ "./pages/lifebuoy"),
  loading: () => <PageLoader />
});

const LoadableSetWet = Loadable({
  loader: () => import(/* webpackChunkName: 'setwet' */ "./pages/setwet"),
  loading: () => <PageLoader />
});

const LoadableNiharShanti = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'niharshanti' */ "./pages/niharshanti"),
  loading: () => <PageLoader />
});

const LoadableTlc = Loadable({
  loader: () => import(/* webpackChunkName: 'tlcproduct' */ "./pages/tlc"),
  loading: () => <PageLoader />
});

const LoadableOziva = Loadable({
  loader: () => import(/* webpackChunkName: 'ozivaproduct' */ "./pages/oziva"),
  loading: () => <PageLoader />
});

const LoadableHershey = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'ozivaproduct' */ "./pages/hershey"),
  loading: () => <PageLoader />
});

const LoadableOzivaKids = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'ozivaproduct' */ "./pages/ozivakids"),
  loading: () => <PageLoader />
});

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route exact path="/difference" component={LoadableDifference} />
      <Route exact path="/work" component={LoadableWork} />
      <Route exact path="/workNew" component={LoadableWorkNew} />
      <Route exact path="/connect" component={LoadableConnect} />
      <Route exact path="/work/hrithik-roshan" component={LoadableHrx} />
      <Route exact path="/work/nihar-gold" component={LoadableNiharGold} />
      <Route exact path="/work/kate-spade" component={LoadableKateSpade} />
      <Route exact path="/work/thambbi" component={LoadableThambbi} />
      <Route exact path="/work/hero-talkies" component={LoadableHero} />
      <Route exact path="/work/cocosoul" component={LoadableCoco} />
      <Route exact path="/work/tlc" component={LoadableTlc} />
      <Route exact path="/work/oziva" component={LoadableOziva} />
      <Route exact path="/work/hershey" component={LoadableHershey} />
      <Route exact path="/work/ozivakids" component={LoadableOzivaKids} />
      <Route
        exact
        path="/login"
        component={LoadableLogin}
        component={props => <LoadableLogin {...props} handleLogin={fakeAuth} />}
      />
      <PrivateRoute exact path="/work/lifebuoy" component={LoadableLifeBuoy} />
      <PrivateRoute exact path="/work/setwet" component={LoadableSetWet} />
      <Route exact path="/work/nihar-shanti" component={LoadableNiharShanti} />
      <Route
        exact
        path="/work/sussegado-coffee"
        component={LoadableSussegado}
      />
      <Route exact path="/work/rapid-rupee" component={LoadableRapidrupee} />
      <Route exact path="/work/socranos-gravity" component={LoadableGravity} />
      <Route exact path="/policy" component={LoadablePolicy} />
      <Route exact path="/terms" component={LoadableTerms} />
      <Route
        path="/careers"
        render={({ match: { path } }) => (
          <div>
            <Route exact path={path} component={LoadableCareers} />
            <Route
              exact
              path={`${path}/:id`}
              component={LoadableCareersInternal}
            />
          </div>
        )}
      />
      <Route component={LoadableNotFound} />
    </Switch>
  );
};

export default Routes;
