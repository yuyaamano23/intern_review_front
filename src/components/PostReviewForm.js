import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SignUpForm extends Component {
  render() {
    return (
      <Form
        className="border border-secondary rounded"
        style={{ width: "600px" }}
      >
        <div className="font-weight-bold h3 mb-4" style={{ margin: "10px" }}>
          記事投稿フォーム
        </div>

        <Form.Group style={{ margin: "10px" }}>
          <Form.Label>訪問企業</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          controlId="exampleForm.SelectCustomSizeSm"
          style={{ margin: "10px" }}
        >
          <Form.Label>期間</Form.Label>
          <Form.Control as="select" size="sm" custom>
            <option>1日</option>
            <option>1週間未満</option>
            <option>1ヶ月未満</option>
            <option>3ヶ月未満</option>
            <option>3ヶ月以上</option>
          </Form.Control>
        </Form.Group>

        <Form.Group style={{ margin: "10px" }}>
          <Form.Label>業務内容</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          style={{ margin: "10px" }}
        >
          <Form.Label>感想</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Button variant="success" type="submit" style={{ margin: "10px" }}>
          投稿する
        </Button>
      </Form>
    );
  }
}
export default SignUpForm;
