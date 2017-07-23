import React from 'react'
import PropTypes from 'prop-types'

const AudioTitle = ({ onClick, text }) => (
    <li onClick={onClick}>
        {text}
    </li>
)

AudioTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default AudioTitle
