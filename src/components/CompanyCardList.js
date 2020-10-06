/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class CompanyCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoaded: false,
      // reviewData: [],

      // 仮データ
      reviewData: [
        {
          id: "1",
          company: "Hamee",
          term: "1週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          id: "2",
          company: "Yahoo!",
          term: "3週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          id: "3",
          company: "Google",
          term: "1ヶ月",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          id: "4",
          company: "Hamee",
          term: "1週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          id: "5",
          company: "Yahoo!",
          term: "3週間",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
        {
          id: "6",
          company: "Google",
          term: "1ヶ月",
          task:
            "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
        },
      ],
    };
  }

  // componentDidMount() {
  //render直後に行いたい処理を書くところ
  //   fetch("") //apiをここに記述
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json.rates);
  //       this.setState({
  //         isLoaded: true,
  //         reviewData: json.rates,
  //       });
  //     });
  // }

  render() {
    // var { reviewData, isLoaded } = this.state;
    // console.log(reviewData);
    // if (!isLoaded) {
    //   return <div>...Loading</div>;
    // } else {
    return (
      <>
        {/* 記事のid受け取って記事詳細に送る必要あるかも */}
        {this.state.reviewData.map((reviewData) => (
          <CompanyCard
            key={reviewData.id}
            company={reviewData.company}
            term={reviewData.term}
            task={reviewData.task}
          />
        ))}
      </>
    );
  }
}
export default CompanyCardList;
