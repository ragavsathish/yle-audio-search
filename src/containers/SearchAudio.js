import React from 'react'
import { connect } from 'react-redux'
import { searchAudioTitles } from '../actions'
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
                dispatch(searchAudioTitles(input.value))
                
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
