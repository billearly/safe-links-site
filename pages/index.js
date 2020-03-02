import React, { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';
import {
  Header,
  SearchForm,
  SearchInput,
  SearchResult,
  Link,
  Container,
  Dyad
} from '../components';
import {
  ContentSection,
  SectionHeader
} from '../components/layout';

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
          <title>Legit Links</title>
        </Head>

        <Container>
          <Dyad>
            <Header
              title='Legit Links'
            >
              <p>Know where you're going before you get there</p>
            </Header>

            <>
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
            </>
          </Dyad>

          <SearchResult
            isSearching={this.state.isRequesting}
            redirectLocation={this.state.redirectLocation}
            defaultCopy="Submit a link to see where it goes"
          />

          {this.state.isErrorResponse &&
            <p>🤔 whoops something went wrong: {this.state.errorMessage}</p>
          }
        </Container>
      </>
    );
  }
}
