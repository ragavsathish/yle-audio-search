import React from 'react';
import PropTypes from 'prop-types';
import AudioTitle from './AudioTitle';

const AudioTitles = ({ audioTitles, onTitleClick }) => (
  <div>

    { audioTitles !== undefined && audioTitles.length !== 0 && audioTitles.map(audioTitle =>
      <AudioTitle
        key={audioTitle.id}
        {...audioTitle}
        onClick={onTitleClick}
      />

    )}
  </div>
)

AudioTitles.propTypes = {
  audioTitles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    expand: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTitleClick: PropTypes.func.isRequired
}

export default AudioTitles
