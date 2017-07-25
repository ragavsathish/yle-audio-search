import React from 'react'
import PropTypes from 'prop-types'

const AudioTitle = ({ onClick, title, id }) => (
    <li onClick={onClick}>
        {title}
    </li>
    
)

AudioTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default AudioTitle
