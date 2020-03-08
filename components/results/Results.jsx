import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Spinner } from "../";
import "./Results.scss";

export const Results = ({
  isOpen,
  isRequesting,
  redirectLocation,
  isErrorResponse,
  errorMessage,
  handleClose
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="results"
    >
      <DialogTitle>{isRequesting ? "Checking..." : "Results"}</DialogTitle>
      <DialogContent>
        {isRequesting &&
          <Spinner />
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
