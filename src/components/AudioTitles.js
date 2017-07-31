import React from 'react';
import PropTypes from 'prop-types';
import AudioTitle from './AudioTitle';

const AudioTitles = ({ audioItems, message, fetchComplete, onTitleClick }) => (
  <div>
    {fetchComplete && <div className="AudioTitles-search-message"> {message} </div>}
    {audioItems.map(item =>
      <AudioTitle
        key={item.id}
        {...item}
        onClick={onTitleClick}
      />
    )}
  </div>
)

AudioTitles.propTypes = {
  audioItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    expand: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  message: PropTypes.string.isRequired,
  fetchComplete: PropTypes.bool.isRequired,
  onTitleClick: PropTypes.func.isRequired,
}

export default AudioTitles
