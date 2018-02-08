import React from 'react';
import PropTypes from 'prop-types';


function CommunityAnnouncement(props){
  return(
    <div>
      <img src={props.image}/>
      <h4>{props.title}</h4>
      <p>{props.author}, {props.date}</p>
      <p>{props.content}</p>
      <p>{props.comments}</p>
      <hr></hr>
    </div>
  );
}

CommunityAnnouncement.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  comments: PropTypes.string
};

export default CommunityAnnouncement;
