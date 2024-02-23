// import { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner } from 'react-bootstrap';

function Loading({ propLoading }) {
  return (
    <div>
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="border" variant="light" />
      <h1>Now Loading</h1>
    </div>
  );
}
Loading.propTypes = {
  propLoading: PropTypes.bool.isRequired,
};
export default Loading;
