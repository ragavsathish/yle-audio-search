import React from 'react';
import PropTypes from 'prop-types';
import DescribeAudioItem from '../containers/DescribeAudioItem';
import musicLogo from '../images/music-logo.png';
import expandButton from '../images/expand.png';
import '../stylesheets/App.css';

const AudioTitle = ({ onClick, title, id, expand }) => (
    <div className="AudioTitle-row">
        <div>
            <img src={musicLogo} className="AudioTitle-music-log" alt="" />
            <span className="AudioTitle-text"> {title} </span>
            <img type="image" src={expandButton} className="AudioTitle-expand-button" alt="" onClick={e => { // eslint-disable-line jsx-a11y/href-no-hash
                e.preventDefault()
                onClick(id)
            }} />
        </div>
        {expand && <DescribeAudioItem />}
    </div>
)

AudioTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    expand: PropTypes.bool.isRequired
}

export default AudioTitle
