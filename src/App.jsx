/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import dayjs from "dayjs";
import { QueryClientProvider } from "react-query";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import {
  SignInPage,
  SignUpPage,
  ConfirmEmailPage,
  ForgotPasswordPage,
  AdditionalInfoPage,
} from "screens/auth";

import { PrivateRoute } from "components/privateRoute";
import { SideBarNavigation } from "common/side-bar-navigation";

import { Routes } from "routes";
import ScrollToTop from "utils/scrollToTop";
import { Routes as PathRoutes } from "constants/routes";
import { SearchBarProvider } from "providers/search-bar";

import { queryClient } from "./reactQuery";

import "./App.css";

dayjs.extend(customParseFormat);

const MainApp = () => (
  <div className="app-container">
    <aside className="aside">
      <SideBarNavigation />
    </aside>
    <main className="main-app">
      <SearchBarProvider>
        <Routes />
      </SearchBarProvider>
    </main>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route component={SignInPage} path={PathRoutes.Auth.Login} />
              <Route component={SignUpPage} path={PathRoutes.Auth.Register} />
              <Route
                component={ConfirmEmailPage}
                path={PathRoutes.Auth.ConfirmEmail}
              />
              <Route
                component={ForgotPasswordPage}
                path={PathRoutes.Auth.ForgotPassword}
              />

              <PrivateRoute
                exact
                component={AdditionalInfoPage}
                path={PathRoutes.Auth.AdditionalInfo}
              />

              <Route component={MainApp} />
            </Switch>
          </ScrollToTop>
        </Router>
      </main>
    </QueryClientProvider>
  );
}

export default App;
