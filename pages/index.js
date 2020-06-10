import React, { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';
import {
  Header,
  SearchForm,
  SearchInput,
  Container,
  Dyad,
  Results
} from '../components';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      linkInfo: null,
      isResultsOpen: false,
      isRequesting: false,
      isErrorResponse: false,
      errorMessage: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResultClose = this.handleResultClose.bind(this);
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
      linkInfo: null,
      isResultsOpen: true,
      isRequesting: true,
      isErrorResponse: false,
      errorMessage: ''
    });

    const encodedUrl = encodeURIComponent(this.state.url);

    axios.get(`/api/v1/link/${encodedUrl}`)
      .then((response) => {
        this.setState({
          linkInfo: response.data,
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

  handleResultClose() {
    this.setState({
      isResultsOpen: false
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

          <Results
            isOpen={this.state.isResultsOpen}
            isRequesting={this.state.isRequesting}
            linkInfo={this.state.linkInfo}
            isErrorResponse={this.state.isErrorResponse}
            errorMessage={this.state.errorMessage}
            handleClose={this.handleResultClose}
          />
        </Container>
      </>
    );
  }
}
