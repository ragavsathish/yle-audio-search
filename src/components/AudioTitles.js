import React from 'react'
import PropTypes from 'prop-types'
import AudioTitle from './AudioTitle'

const AudioTitles = ({ audioTitles, onTitleClick }) => (
  <ul>
    {audioTitles.map(title =>
      <AudioTitle
        key={title.id}
        {...title}
        onClick={() => onTitleClick(title.id)}
      />
    )}
  </ul>
)

AudioTitles.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTitleClick: PropTypes.func.isRequired
}

export default AudioTitles
