import React from "react";
import PropTypes from "prop-types";
import { Highlight } from "react-instantsearch-dom";

export default Hit;

function Hit({ hit }) {
  return (
    <div className="hit">
      <div className="hit-image">
        <img alt='' src={hit.image} />
      </div>
      <div className="hit-content">
        <div>
          <div className="hit-name">
            <Highlight attribute="name" hit={hit} tagName="em" />
          </div>
          <div className="hit-description">
            <p>Species: {hit.species}</p>
            <p>Status: {hit.status}</p>
            {hit.type ?             
            <p>Type: {hit.type}</p> 
          : ''}

            <p>Origin: {hit.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};