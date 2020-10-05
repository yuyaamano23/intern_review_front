/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class CompanyCard extends Component {
  render() {
    return (
      <div className="card m-3 p-2" style={{ width: "320px" }}>
        <div className="card-body">
          <div className="mb-3 border-bottom h3">Hamee</div>
          <div className="mb-3 text-muted h6">1週間(9/7~9/11)</div>
          <p className="card-text" style={{ fontSize: "0.8em" }}>
            自社サービスの拡張機能、商品検索APIの実装、フロントリファクタリング
          </p>
          <a className="btn btn-success text-white">記事詳細へ</a>
        </div>
      </div>
    );
  }
}
export default CompanyCard;
