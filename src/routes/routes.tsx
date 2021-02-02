import * as React from "react";
import {Navigate} from "react-router";

const Page1 = React.lazy(() => import("../pages/Page1"));
const Page2 = React.lazy(() => import("../pages/Page2"));

const routes = [
  {
    path: "/",
    component: Page1,
  },
  {
    path: "/page2",
    component: Page2,
  },
  {
    path: "/*",
    component: () => <Navigate to="/"/>,
  },
];

export default routes;