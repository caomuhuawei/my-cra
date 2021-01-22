import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "mobx-react";
import routes from "./config/router.config";
import Loading from "./components/loading";
import Home from "./containers/home";
import Login from "./containers/login";
import List from "./containers/list";
import { allStore } from "./stores/createStore";
import { get } from "utils/storage";

export default function RouteConfig(props) {
  return (
    <Provider {...allStore}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={List} />
          <Route exact path="/" component={Home} />
          {routes.map((route, i) => (
            <Route
              exact
              key={i}
              path={route.path}
              render={(props) => {
                const { token } = get("token") || {};
                return (
                  <>
                    {props.token || token ? <route.component {...props} /> : <Redirect to="/login" />}
                    <Loading />
                  </>
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}
