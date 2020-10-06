import React, { Component } from "react";

class DetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   isLoaded: false,
      //   reviewData: [],
      //   仮データ
      reviewData: {
        company: "Hamee",
        term: "1週間",
        task: "自社サービスであるネクストエンジンの商品検索API",
        impression:
          "オフラインで自社で開発しているネクストエンジンの開発に携わりました。社風はaaaaaaaaaaaaaa",
      },
    };
  }
  render() {
    return (
      <>
        <div
          className=" bg-white border rounded container mt-3"
          style={{
            width: "600px",
            boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)",
          }}
        >
          <div style={{ textAlign: "center", padding: "15px" }}>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
              }}
            >
              会社名
            </p>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>
              {this.state.reviewData.company}
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
              }}
            >
              期間
            </p>
            <p>{this.state.reviewData.term}</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
              }}
            >
              業務内容
            </p>
            <p>{this.state.reviewData.task}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
              }}
            >
              感想
            </p>
            <p>{this.state.reviewData.impression}</p>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            style={{
              margin: "10px",
            }}
          >
            一覧に戻る
          </button>
        </div>
      </>
    );
  }
}
export default DetailModal;
