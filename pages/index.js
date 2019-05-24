import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import axios from 'axios';
import { Header } from '../components';

const Form = styled.form``;

const Input = styled.input``;

const Result = styled.p``;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      redirectLocation: '',
      isRequesting: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      url: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // verify its a url before making the request

    this.setState({
      redirectLocation: '',
      isRequesting: true
    });

    const encodedUrl = encodeURIComponent(this.state.url);

    axios.get(`/api/v1/link/${encodedUrl}`)
      .then((response) => {
        console.log(response.data.location);
        this.setState({
          redirectLocation: response.data.location,
          isRequesting: false
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isRequesting: false
        });
      });
  }

  render() {
    return (
      <>
        <Head>
          <title>Safe Little Links</title>
        </Head>

        <Header
          title='Safe Little Links'
        />

        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            value={this.state.url}
          />
        </Form>

        <Result>
          {this.state.redirectLocation}
        </Result>

        {this.state.isRequesting &&
          <p>Checking...</p>
        }
      </>
    );
  }
}
