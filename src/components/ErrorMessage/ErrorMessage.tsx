/** @format */

import {FC, useEffect} from "react";
import toast from "react-hot-toast";

interface ErrorMessageProps {
  showError: boolean;
}

const ErrorMessage: FC<ErrorMessageProps> = ({showError}) => {
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
