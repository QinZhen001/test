import {  DefaultPageComponent } from "../pages";
import { HashRouter, Route, Switch } from "react-router-dom";

export type AppRouteComponent = {
  path: string;
  component: React.FC<any>;
  title: string;
};

export const routes: AppRouteComponent[] = [
  // default component
  {
    path: "/",
    component: DefaultPageComponent,
    title: "default",
  },
];

export const RouteContainer = () => (
  <HashRouter>
    <Switch>
      {routes.map((item) => (
        <Route key={item.path} exact path={item.path} component={item.component} />
      ))}
    </Switch>
  </HashRouter>
);
