import React from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Spinner } from "./";

const SpinnerContainer = styled.div`
  padding: 5rem 10rem;

  @media (max-width: 55rem) {
    padding: 2rem;
  }
`;

export const Results = ({
  isOpen,
  isRequesting,
  redirectLocation,
  isErrorResponse,
  errorMessage,
  handleClose
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{isRequesting ? "Checking..." : "Results"}</DialogTitle>
      <DialogContent>
        {isRequesting &&
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        }

        {!isRequesting && redirectLocation &&
          <DialogContentText>{redirectLocation}</DialogContentText>
        }

        {isErrorResponse &&
          <DialogContentText>🤔 whoops something went wrong: {errorMessage}</DialogContentText>
        }
      </DialogContent>
    </Dialog>
  );
}
