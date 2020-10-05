import React, { Component } from "react";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import Pagination from "../components/Pagination";

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container text-center">
          <div className="row">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
        </div>
        <Pagination />
      </>
    );
  }
}
export default MainPage;
