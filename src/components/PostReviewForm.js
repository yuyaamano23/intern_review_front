import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <form
        className="bg-white border rounded container mt-4"
        style={{ width: "600px", boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)" }}
      >
        <div className="font-weight-bold h3 mb-4" style={{ margin: "10px" }}>
          記事投稿フォーム
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">企業</label>
          <input class="form-control" type="text"></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">期間</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1日</option>
            <option>1週間未満</option>
            <option>1ヶ月未満</option>
            <option>3ヶ月未満</option>
            <option>3ヶ月以上</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">業務内容</label>
          <textarea class="form-control" type="text" rows="2"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">感想</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ margin: "10px" }}
        >
          投稿する
        </button>
      </form>
    );
  }
}
export default SignUpForm;
