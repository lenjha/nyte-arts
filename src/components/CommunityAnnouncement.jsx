import React from 'react';
import PropTypes from 'prop-types';


function CommunityAnnouncement(props){
  return(
    <div>
      <style jsx>{`
        margin: 0;

        .announcement {
          padding: 10px;
          margin: 10px auto;
        }
      `}</style>
      <div className='announcement'>
        <img src={props.image}/>
        <h3><b>{props.title}</b></h3>
        <p><em>{props.author}, {props.date}</em></p>
        <p>{props.content}</p>
        <p>{props.comments}</p>
      </div>
      <hr />
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
