import React from 'react'
import PropTypes from 'prop-types'

const AudioTitle = ({ onClick, title, id }) => (
    <li>
        <a href="#" onClick={e => { // eslint-disable-line jsx-a11y/href-no-hash
            e.preventDefault()
            onClick(id)
        }}>
            {title}
        </a>
    </li>

)

AudioTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default AudioTitle
