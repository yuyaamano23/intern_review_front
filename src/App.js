import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostReviewPage from "./pages/PostReviewPage";
import SignUpPage from "./pages/SignUpPage";
import DetailPage from "./pages/DetailPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/SignUp" component={SignUpPage} />
        <Route path="/Post" component={PostReviewPage} />
        <Route path="/Detail/:id" component={DetailPage} />
      </Router>
    );
  }
}
export default App;
