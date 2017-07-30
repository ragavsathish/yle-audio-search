import React from 'react'

class AudioItem extends React.Component {

    render() {
        const audioItem = this.props.audioItem;
        let isEmpty = audioItem === undefined || audioItem.length === 0;
        return isEmpty ? <div></div> :
            <table>
                <tbody>
                    <tr>
                        <td>Description</td>
                        <td>{audioItem.description}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{audioItem.type}</td>
                    </tr>
                    <tr>
                        <td>Publisher</td>
                        <td>{audioItem.publisher}</td>
                    </tr>
                    <tr>
                        <td>Downloadable</td>
                        <td>{audioItem.downloadable.toString()}</td>
                    </tr>
                </tbody>
            </table>
    }
}

export default AudioItem
