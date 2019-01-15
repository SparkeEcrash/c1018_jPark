import React, { Component } from 'react'

import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";

export class layout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}

export default layout
