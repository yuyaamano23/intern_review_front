/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class CompanyCard extends Component {
  render() {
    return (
      <div
        className="card m-3 p-2"
        style={{ width: "320px", boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)" }}
      >
        <div className="card-body">
          <div className="mb-3 border-bottom h3">{this.props.company}</div>
          <div className="mb-3 text-muted h6">{this.props.term}</div>
          <p className="card-text" style={{ fontSize: "0.8em" }}>
            {this.props.task}
          </p>
          <a className="btn btn-success text-white">記事詳細へ</a>
        </div>
      </div>
    );
  }
}
export default CompanyCard;
