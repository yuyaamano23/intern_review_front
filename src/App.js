import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostReviewPage from "./pages/PostReviewPage";
import SignUpPage from "./pages/SignUpPage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/SignUp" component={SignUpPage} />
            <Route path="/Post" component={PostReviewPage} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
