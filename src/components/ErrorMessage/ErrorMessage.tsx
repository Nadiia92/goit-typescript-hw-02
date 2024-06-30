/** @format */

import {useEffect} from "react";
import toast from "react-hot-toast";

const ErrorMessage = ({showError}) => {
  useEffect(() => {
    if (showError) {
      toast.error(
        "Whoops. Something went wrong! Please try reloading this page!"
      );
    }
  }, [showError]);

  return null;
};

export default ErrorMessage;
