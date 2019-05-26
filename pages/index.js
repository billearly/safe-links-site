import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import axios from 'axios';
import { Header, SearchForm, SearchInput } from '../components';

const Result = styled.p``;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      redirectLocation: '',
      isRequesting: false,
      isErrorResponse: false,
      errorMessage: ''
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
      isRequesting: true,
      isErrorResponse: false,
      errorMessage: ''
    });

    const encodedUrl = encodeURIComponent(this.state.url);

    axios.get(`/api/v1/link/${encodedUrl}`)
      .then((response) => {
        this.setState({
          redirectLocation: response.data.location,
          isRequesting: false
        });
      })
      .catch((error) => {
        this.setState({
          isRequesting: false,
          isErrorResponse: true,
          errorMessage: error.response.data.message
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
        >
          <p>Know where you're going before you get there</p>

          <SearchForm handleSubmit={this.handleSubmit}>
            <SearchInput
              handleChange={this.handleChange}
              value={this.state.url}
              placeholders={[
                'https://bit.ly',
                'https://tinyurl.com',
                'https://goo.gl'
              ]}
            />
          </SearchForm>
        </Header>

        {this.state.redirectLocation !== '' &&
          <Result>
            {this.state.url} === redirects to ==> {this.state.redirectLocation}
          </Result>
        }

        {this.state.isRequesting &&
          <p>Checking...</p>
        }

        {this.state.isErrorResponse &&
          <p>🤔 whoops something went wrong: {this.state.errorMessage}</p>
        }
      </>
    );
  }
}
