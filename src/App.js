import React, { Component } from "react";
import Header from "./components/Header";
import PostReviewForm from "./components/PostReviewForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostReviewForm />
      </div>
    );
  }
}
export default App;
