import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Routers from "./config"
const routes = Routers.ROUTERS 


const AppRoutes = ({})=>{
    return(
        <Router>
            <Switch>
            {routes.map((route) => (
                <Route
                key={route.path}
                path={route.path}
                exact
                component={route.component}
                ></Route>
            ))}
            </Switch>
        </Router>
    )
}
export default AppRoutes;