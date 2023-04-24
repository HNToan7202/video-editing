import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { PrivateRoute } from "./PrivateRoute.js";
import RoutePath from "./route-path.js";
import NavTabs from "../nav-tabs/nav-tabs.jsx";
import Login from "../Login/index.jsx";
import SignUp from "../Login/sign-up.jsx";
//IndexImportHygen

function rootRouters() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPrivate element={<Login />} />}
          exact
        />
        <Route
          path="/signUp"
          element={<LoginPrivate element={<SignUp />} />}
          exact
        />
        <Route
          path="/*"
          element={
            <PrivateRoute
              element={
                <NavTabs>
                  <RoutePath />
                </NavTabs>
              }
            />
          }
        />
      </Routes>
    </>
  );
}
export default rootRouters;

const LoginPrivate = ({ element }) => {
  if (Cookies.get("Token")) return <Navigate to="/" />;
  return element;
};
