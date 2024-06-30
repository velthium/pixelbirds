import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Success = (props) => {
  useEffect(() => {
    const displaySuccess = () => {
      let successMessage = "";

      if (props.success.code === 0) {
        successMessage = `Successful transaction. Hash: ${props.success.transactionHash}`;
      }

      Swal.fire({
        icon: "success",
        title: successMessage,
        showConfirmButton: true,
        timer: 1500,
      });
    };

    if (props.success) {
      displaySuccess();
    }
  }, [props.success]);

  return null;
};

Success.propTypes = {
  success: PropTypes.object.isRequired,
};

export default Success;
