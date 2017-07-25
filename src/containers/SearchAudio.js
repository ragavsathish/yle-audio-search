import React from 'react'
import { connect } from 'react-redux'
import { searchAudioTitles } from '../actions'

let SearchAudio = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(searchAudioTitles(input.value))
                
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Search
        </button>
            </form>
        </div>
    )
}

SearchAudio = connect()(SearchAudio)

export default SearchAudio
