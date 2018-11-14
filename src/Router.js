import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./pages/App";
import App2 from "./pages/About";

const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about/" component={App2} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;