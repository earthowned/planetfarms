/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import dayjs from "dayjs";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { SignInPage } from "screens/auth/sign-in";
import { SignUpPage } from "screens/auth/sign-up";
import { ForgotPasswordPage } from "screens/auth/forgot-password";
import { CongratulationsPage } from "screens/auth/congratulations";
import { AdditionalInfoPage } from "screens/auth/additional-info";

import { Navigation } from "common/navigation";
import { PrivateRoute } from "components/privateRoute";

import { Routes } from "routes";
import ScrollToTop from "utils/scrollToTop";

import { queryClient } from "./reactQuery";

import "./App.css";

dayjs.extend(customParseFormat);

const MainApp = () => (
  <div className="app-container">
    <aside className="aside">
      <Navigation />
    </aside>
    <main className="main-app">
      <Routes />
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
                path="/congratulations"
                component={CongratulationsPage}
              />

              <Route
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
