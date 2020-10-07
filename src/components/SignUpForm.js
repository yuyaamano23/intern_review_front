import React, { Component } from "react";
import Validation from "../validation";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        email: "",
        password: "",
      },
      message: {
        email: "",
        password: "",
      },
      loading: false,
    };
  }
  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const { info, message } = this.state;

    this.setState({
      info: { ...info, [key]: value },
    });
    this.setState({
      message: {
        ...message,
        [key]: Validation.formValidate(key, value),
      },
    });
  };

  canSubmit = () => {
    const { info, message, loading } = this.state;

    const validInfo =
      Object.values(info).filter((value) => {
        return value === "";
      }).length === 0;
    const validMessage =
      Object.values(message).filter((value) => {
        return value !== "";
      }).length === 0;
    return validInfo && validMessage && !loading;
  };

  // 連打されるのを防ぐ
  submit = () => {
    this.setState({ loading: true });
    this.setState({ loading: false });
  };

  render() {
    const { info, message } = this.state;
    return (
      <form
        className="bg-white border rounded container mt-4"
        style={{ width: "600px", boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)" }}
      >
        <div className="font-weight-bold h3 mb-4" style={{ margin: "10px" }}>
          新規登録
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            // aria-describedby="emailHelp"
            placeholder="Enter email"
            value={info.email}
            onChange={(event) => this.handleChange(event)}
          />
          {message.email && (
            <p style={{ color: "red", fontSize: 8 }}>{message.email}</p>
          )}
          <small id="emailHelp" className="form-text text-muted">
            公開せませんので安心して入力しやがれ
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={info.password}
            onChange={(event) => this.handleChange(event)}
          />
          {message.password && (
            <p style={{ color: "red", fontSize: 8 }}>{message.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ margin: "10px" }}
          disabled={!this.canSubmit()}
          onClick={() => this.submit()}
        >
          登録する
        </button>
      </form>
    );
  }
}
export default SignUpForm;
