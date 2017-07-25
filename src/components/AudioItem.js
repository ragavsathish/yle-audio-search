import React from 'react'
import PropTypes from 'prop-types'

const AudioItem = ({ audioItem, dispatch }) => {
    let isEmpty = audioItem === undefined || audioItem.length === 0;
    return isEmpty ? <div></div> :
        <table>
            <tr>
                <td>id</td>
                <td>{audioItem.id}</td>
            </tr>
            <tr>
                <td>title</td>
                <td>{audioItem.title}</td>
            </tr>
            <tr>
                <td>description</td>
                <td>{audioItem.description}</td>
            </tr>
            <tr>
                <td>type</td>
                <td>{audioItem.type}</td>
            </tr>
            <tr>
                <td>publisher</td>
                <td>{audioItem.publisher}</td>
            </tr>
            <tr>
                <td>downloadable</td>
                <td>{audioItem.downloadable}</td>
            </tr>
        </table>
}

AudioItem.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
}
export default AudioItem
