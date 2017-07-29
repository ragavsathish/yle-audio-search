import React from 'react'
import PropTypes from 'prop-types'
import AudioTitle from './AudioTitle'

const AudioTitles = ({ audioTitles, onTitleClick }) => (
  <div>
    {audioTitles.map(audioTitle =>
      <AudioTitle
        key={audioTitle.id}
        {...audioTitle}
        onClick={onTitleClick}
      />

    )}
  </div>
)

AudioTitles.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    enable: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTitleClick: PropTypes.func.isRequired
}

export default AudioTitles
