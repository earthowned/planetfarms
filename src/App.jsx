/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { SignInPage } from "screens/auth/sign-in";
import { SignUpPage } from "screens/auth/sign-up";
import { ForgotPasswordPage } from "screens/auth/forgot-password";

import { Navigation } from "common/navigation";
import { PageHeader } from "common/page-header";
import { PrivateRoute } from "components/privateRoute";

import { Routes } from "routes";
import ScrollToTop from "utils/scrollToTop";

import { queryClient } from "./reactQuery";

import "./App.css";

const MainApp = () => (
  <div className="app-container">
    <aside className="aside">
      <Navigation />
    </aside>
    <main className="main-app">
      <PageHeader />
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
              <PrivateRoute component={MainApp} />
            </Switch>
          </ScrollToTop>
        </Router>
      </main>
    </QueryClientProvider>
  );
}

export default App;
