/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav4"
          aria-controls="navbarNav4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand"
          style={{ color: "white", fontSize: "25px" }}
        >
          Intern Reviews
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link">
                <Link to="/SignUp">新規登録</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/">投稿一覧</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/Post">レビューを書く</Link>
              </a>
            </li>
          </ul>
          <nav class="navbar navbar-light">
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </nav>
    );
  }
}
export default Header;
