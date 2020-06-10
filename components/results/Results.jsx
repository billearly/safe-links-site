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

              {location
                ? <TextToken type="warning">{location}</TextToken>
                : <p>This link doesn't redirect</p>
              }
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
