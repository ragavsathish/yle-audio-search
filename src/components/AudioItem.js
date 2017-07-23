import React from 'react'

const AudioItem = (audioItem) => (
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
)

export default AudioItem
