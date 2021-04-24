import React from "react";
import { Route } from "react-router";
import loadable from "@loadable/component";
export type UseParamsType = {};
export const RouteConfig = {
    ["/"]: loadable(() => import("../pages/index"))
};
export default () => (<><Route path="/" component={RouteConfig["/"]} exact/></>);

