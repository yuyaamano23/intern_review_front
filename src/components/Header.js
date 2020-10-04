import React, { Component } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Intern Review</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">新規登録</Nav.Link>
          <Nav.Link href="#features">投稿一覧</Nav.Link>
          <Nav.Link href="#pricing">レビューを書く</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
export default Header;
