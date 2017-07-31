import React from "react";
import PropTypes from "prop-types";
import DescribeAudioItem from "../containers/DescribeAudioItem";
import musicLogo from "../images/music-logo.png";
import {Panel} from "react-bootstrap";
import "../stylesheets/App.css";

const AudioTitle = ({ onClick, title, id, expand }) => (
    <Panel onClick ={ e=>{onClick(id)} }>
        <div className="AudioTitle-container">
            <img src={musicLogo} className="AudioTitle-music-log" alt="" />
            <span className="AudioTitle-text"> {title} </span>
        </div>
        {expand && <DescribeAudioItem />}
    </Panel>
)

AudioTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    expand: PropTypes.bool.isRequired
}

export default AudioTitle
