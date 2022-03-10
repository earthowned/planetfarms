/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import dayjs from "dayjs";
import { QueryClientProvider } from "react-query";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { SignInPage } from "screens/auth/sign-in";
import { SignUpPage } from "screens/auth/sign-up";
import { ForgotPasswordPage } from "screens/auth/forgot-password";
import { AdditionalInfoPage } from "screens/auth/additional-info";

import { PrivateRoute } from "components/privateRoute";
import { SideBarNavigation } from "common/side-bar-navigation";

import { Routes } from "routes";
import ScrollToTop from "utils/scrollToTop";
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
              <Route component={SignInPage} path="/login" />
              <Route component={SignUpPage} path="/register" />
              <Route component={ForgotPasswordPage} path="/forgot-password" />

              <PrivateRoute
                exact
                path="/additional-info"
                component={AdditionalInfoPage}
              />

              <PrivateRoute component={MainApp} />
            </Switch>
          </ScrollToTop>
        </Router>
      </main>
    </QueryClientProvider>
  );
}

export default App;
