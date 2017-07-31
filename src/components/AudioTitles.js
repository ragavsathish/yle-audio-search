import React from 'react';
import PropTypes from 'prop-types';
import AudioTitle from './AudioTitle';

const AudioTitles = ({ audioItems, onTitleClick }) => (
  <div>

    {audioItems !== undefined && audioItems.length !== 0 && audioItems.map(item =>
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
  onTitleClick: PropTypes.func.isRequired
}

export default AudioTitles
