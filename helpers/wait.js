import PropTypes from "prop-types";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

wait.propTypes = {
  timeout: PropTypes.number,
};

wait.defaultProps = {
  timeout: 0,
};

export default wait;

// Path: src\helpers\promise.js