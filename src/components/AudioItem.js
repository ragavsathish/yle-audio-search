import React from 'react'

class AudioItem extends React.Component {

    render() {
        const audioItem = this.props.audioItem;
        let isEmpty = audioItem === undefined || audioItem.length === 0;
        return isEmpty ? <div></div> :
            <table>
                <tbody>
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
                </tbody>
            </table>
    }
}

export default AudioItem
