import React from "react";
import { Switch, Route } from "react-router-dom";
import { flattenDeep, isArray, isNil } from "lodash-es";
import AuthRoute from "../hoc/_Auth";
import RouteIndex from "./RouteIndex";
import NotFound from "../containers/NotFound";

export function mapConfigToRoutes(route) {
  const isGroup = isArray(route.children);
  const PageComponent = isNil(route.component)
    ? isGroup
      ? RouteIndex
      : NotFound
    : route.component;

  const routeComponent = (
    <AuthRoute
      key={route.uniqueKey}
      path={route.path}
      exact={route.exact || isArray(route.children)}
      strict={route.strict}
      isPublic={route.isPublic}
      component={PageComponent}
    />
  );
  const childComponents = isGroup ? route.children.map(mapConfigToRoutes) : [];
  return [routeComponent, ...childComponents];
}

export function renderRoutes(routeConfig) {
  const updatedChildren = routeConfig.children.map((childRoute) => {
    if (childRoute.isValidRole) {
      return childRoute;
    } else {
      return {
        ...childRoute,
        component: React.lazy(() => import("../containers/Unauthorized/index")),
      };
    }
  });
  const routeComponents = mapConfigToRoutes({
    ...routeConfig,
    children: updatedChildren,
  });
  const flatRouteComponents = flattenDeep(routeComponents);

  return (
    <Switch>
      {flatRouteComponents}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
