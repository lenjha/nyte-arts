import React from 'react';
import PropTypes from 'prop-types';

function ArtworkPage(props){

  return(
    <div>
      <style jsx>{`
          width: auto;
          height: auto;
          display: flex;
          `}</style>
      <img src={require(`../assets/img/artworks/${props.image}`)}/>
    </div>
  );
}

ArtworkPage.propTypes = {
  image: PropTypes.string,
};

export default ArtworkPage;
