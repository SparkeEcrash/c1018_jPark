import React, { Component } from 'react'

import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

export class layout extends Component {

  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </AlertProvider>
    )
  }
}

export default layout
