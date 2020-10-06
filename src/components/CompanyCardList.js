/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

// const items = {
//   company: "Hamee",
//   term: "1週間",
//   task: "自社サービスの拡張機能、商品検索APIの実装、フロントリファクタリング",
// };

class CompanyCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: [
        {
          company: "Hamee",
          term: "1週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          company: "Yahoo!",
          term: "3週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          company: "Google",
          term: "1ヶ月",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          company: "Hamee",
          term: "1週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          company: "Yahoo!",
          term: "3週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          company: "Google",
          term: "1ヶ月",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.companyInfo.map((companyInfo) => (
          <CompanyCard
            company={companyInfo.company}
            term={companyInfo.term}
            task={companyInfo.task}
          />
        ))}
      </>
    );
  }
}
export default CompanyCardList;
