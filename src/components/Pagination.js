import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class PaginationComponent extends Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    const pagination = (
      <div>
        <Pagination>{items}</Pagination>
      </div>
    )
    return (
      <div>
        {pagination}
      </div>
    )
  }
}

export default PaginationComponent;