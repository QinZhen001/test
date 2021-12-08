import { BComponent, TComponent, DefaultPageComponent } from "../pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
  {
    path: "/page/b",
    component: BComponent,
    title: "bbbb",
  },
  {
    path: "/page/t",
    component: TComponent,
    title: "tttt",
  },
];

export const RouteContainer = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((item) => (
        <Route key={item.path} exact path={item.path} component={item.component} />
      ))}
    </Switch>
  </BrowserRouter>
);
