import React, { useState } from 'react';
import Drawer from "@material-ui/core/Drawer";
import { Info, X } from "react-feather";
import Head from 'next/head';
import axios from 'axios';
import {
  Header,
  SearchForm,
  SearchInput,
  SearchButton,
  Container,
  Dyad,
  Results,
  TransparentButton,
  ContentBlockNarrow,
  Link
} from '../components';

const Home = () => {
  const [url, setUrl] = useState("");
  const [linkInfo, setLinkInfo] = useState(null);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isErrorResponse, setIsErrorResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      return;
    }

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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

              <SearchButton
                isDisabled={!url.trim()}
              />
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

        <TransparentButton
          onClick={toggleDrawer}
          style={{
            position: "fixed",
            right: "0.5rem",
            bottom: "0.5rem",
            color: "white"
          }}
        >
          <Info />
        </TransparentButton>
      </Container>

      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        anchor="right"
      >
        <ContentBlockNarrow>
          <h3>Is this link legit?</h3>

          <p>Have you found a link on the internet and you want to know where it goes before you click on it?</p>
          <p>Put the link in the search box and this site will let you know if the link redirects</p>

          <h4>What is a redirect?</h4>
          <p>Sometimes links on the internet send you somewhere other than where they say they will. This is called a redirect.</p>
          <p>For example, <Link href="https://bit.ly/IFHzvO" isExternal={true}>https://bit.ly/IFHzvO</Link> will actually send you to google.com. Try it out!</p>

          <TransparentButton
            onClick={toggleDrawer}
            style={{
              position: "absolute",
              right: "0.5rem",
              bottom: "0.5rem"
            }}
          >
            <X />
          </TransparentButton>
        </ContentBlockNarrow>
      </Drawer>
    </>
  );
}

export default Home;