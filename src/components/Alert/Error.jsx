import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ErrorAlert = ({ error }) => {
  useEffect(() => {
    const displayError = () => {
      let errorMessage = "An unexpected error occurred";

      if (typeof error.message === "string") {
        switch (true) {
          case error.message.includes("An error occurred while connecting to Keplr"):
            errorMessage = "An error occurred while connecting to Keplr.";
            break;
          case error.message.includes("Keplr extension not found"):
            errorMessage = "Keplr extension not found.";
            break;
          case error.message.includes("has already been created"):
            errorMessage = "Account with this DTag already exists.";
            break;
          case error.message.includes("it should match the following regEx."):
            errorMessage = "Please enter valid characters.";
            break;
          case error.message.includes("cannot be less"):
            errorMessage = "Profile dtag cannot be less than 6 characters.";
            break;
          case error.message.includes("Request rejected"):
            errorMessage = "Error: Request rejected by the user.";
            break;
          case error.message.includes("Keplr + Ledger is currently not supported"):
            errorMessage = "Keplr + Ledger is currently not supported.";
            break;
          case error.message.includes("Cannot read properties of undefined (reading 'post')"):
            errorMessage = "Post not found.";
            break;
          case error.message.includes("section: permissions denied"):
            errorMessage = "Permissions denied";
            break;
          case error.message.includes("Cannot read properties of undefined (reading 'Name')"):
            errorMessage = "IPFS upload error";
            break;
          default:
            errorMessage = "An unexpected error occurred.";
            break;
        }
      }

      Swal.fire({
        icon: "error",
        title: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      });
    };

    if (error) {
      displayError();
    }
  }, [error]);

  return null;
};

ErrorAlert.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorAlert;
