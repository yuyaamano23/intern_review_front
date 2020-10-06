/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class CompanyCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      reviewData: [],
      // 仮データ
      //   reviewData: [
      //     {
      //       company: "Hamee",
      //       term: "1週間",
      //       task:
      //         "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
      //     },
      //     {
      //       company: "Yahoo!",
      //       term: "3週間",
      //       task:
      //         "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
      //     },
      //     {
      //       company: "Google",
      //       term: "1ヶ月",
      //       task:
      //         "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
      //     },
      //     {
      //       company: "Hamee",
      //       term: "1週間",
      //       task:
      //         "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
      //     },
      //     {
      //       company: "Yahoo!",
      //       term: "3週間",
      //       task:
      //         "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
      //     },
      //     {
      //       company: "Google",
      //       term: "1ヶ月",
      //       task:
      //         "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風は...",
      //     },
      //   ],
    };
  }

  componentDidMount() {
    fetch("") //apiをここに記述
      .then((res) => res.json())
      .then((json) => {
        console.log(json.rates);
        this.setState({
          isLoaded: true,
          reviewData: json.rates,
        });
      });
  }

  render() {
    var { reviewData, isLoaded } = this.state;
    console.log(reviewData);
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <>
          {this.state.reviewData.map((reviewData) => (
            <CompanyCard
              company={reviewData.company}
              term={reviewData.term}
              task={reviewData.task}
            />
          ))}
        </>
      );
    }
  }
}
export default CompanyCardList;
