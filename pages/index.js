import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import {
  Header,
  SearchForm,
  SearchInput,
  SearchButton,
  Container,
  Dyad,
  Results
} from '../components';

const Home = () => {
  const [url, setUrl] = useState("");
  const [linkInfo, setLinkInfo] = useState(null);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isErrorResponse, setIsErrorResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // verify its a url before making the request

    setLinkInfo(null);
    setIsResultsOpen(true);
    setIsRequesting(true);
    setIsErrorResponse(false);
    setErrorMessage("");

    const encodedUrl = encodeURIComponent(url);

    axios.get(`/api/v1/link/${encodedUrl}`)
      .then((response) => {
        setLinkInfo(response.data);
        setIsRequesting(false);
      })
      .catch((error) => {
        setIsRequesting(false);
        setIsErrorResponse(true);
        setErrorMessage(error.response.data.message);
      });
  }

  const handleResultClose = () => {
    setIsResultsOpen(false);
  }

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
            <SearchForm handleSubmit={handleSubmit}>
              <SearchInput
                handleChange={handleChange}
                value={url}
                placeholders={[
                  'https://bit.ly',
                  'https://tinyurl.com',
                  'https://goo.gl'
                ]}
              />

              <SearchButton />
            </SearchForm>
          </>
        </Dyad>

        <Results
          isOpen={isResultsOpen}
          isRequesting={isRequesting}
          linkInfo={linkInfo}
          isErrorResponse={isErrorResponse}
          errorMessage={errorMessage}
          handleClose={handleResultClose}
        />
      </Container>
    </>
  );
}

export default Home;