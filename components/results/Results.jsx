import React from "react";
import Dialog from '@material-ui/core/Dialog';
import { ResultsSection } from "./ResultsSection";
import { TextToken } from "../text-token";
import { Spinner } from "../";
import "./Results.scss";

export const Results = ({
  isOpen,
  isRequesting,
  linkInfo,
  isErrorResponse,
  errorMessage,
  handleClose
}) => {
  const {
    responseCode,
    location,
    linkOrigin,
    service
  } = linkInfo || {};

  const {
    type,
    description,
    reportLink
  } = service || {};

  const getResponseMessage = () => {
    // Success
    if (responseCode >= 200 && responseCode < 300) {
      return <p>This link does not redirect</p>;
    }

    // Redirect
    if (responseCode >= 300 && responseCode < 400) {
      return <TextToken type="warning">{location}</TextToken>;
    }

    // Error
    if (responseCode >= 400) {
      return <p>This link responded with an error code: <TextToken type="warning">{responseCode}</TextToken></p>;
    }

    // Default
    return <p>This link responded with an unknown code: <TextToken type="warning">{responseCode}</TextToken></p>;
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <div className="results">
        {isRequesting &&
          <Spinner />
        }

        {!isRequesting && !isErrorResponse &&
          <>
            <ResultsSection sectionType='primary'>
              <h4>Original Link</h4>
              <TextToken>{linkOrigin}</TextToken>
            </ResultsSection>

            <ResultsSection sectionType='primary'>
              <h4>Destination</h4>
              {getResponseMessage()}
            </ResultsSection>

            {type &&
              <ResultsSection sectionType='secondary'>
                <h4>More Info</h4>
                <p>{`This is a ${type} link`}</p>
              </ResultsSection>
            }

            {type &&
              < ResultsSection sectionType='secondary'>
                <h4>Does this link look suspicious?</h4>
                <p>Report it <a href={reportLink} target="_blank" rel="noopener noreferrer">here</a></p>
              </ResultsSection>
            }

            <ResultsSection sectionType='tertiary'>
              <p>Remember, this service only tells you where a link goes, not if its safe. <b>Don't click on any links you don't trust</b></p>
            </ResultsSection>
          </>
        }

        {!isRequesting && isErrorResponse &&
          <ResultsSection sectionType='primary'>
            <h4>Whoops something went wrong 🤔</h4>
            <p>{errorMessage}</p>
          </ResultsSection>
        }
      </div>
    </Dialog >
  );
}
