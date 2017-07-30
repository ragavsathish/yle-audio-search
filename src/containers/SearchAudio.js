import React from 'react'
import { connect } from 'react-redux'
import reduxApi from "../middleware/api"
import '../stylesheets/App.css';

let SearchAudio = ({ dispatch }) => {
    let input

    return (
        <div>
            <form className="SearchAudio-form" onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(reduxApi.actions.getItems({searchText: input.value}))
                
            }}>
                <input className="SearchAudio-text"  ref={node => {
                    input = node
                }} />
                <button className="SearchAudio-button" type="submit">
                    Search
        </button>
            </form>
        </div>
    )
}

SearchAudio = connect()(SearchAudio)

export default SearchAudio
