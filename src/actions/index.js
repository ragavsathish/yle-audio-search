export const searchAudioTitles = (searchText) => ({
    type: 'SEARCH_AUDIO_BY_TITLE',
    searchText
})

export const getAudioDetails = (selectedId) => ({
    type: 'GET_AUDIO_DETAILS',
    selectedId
})

export const postFetchAudioTitles = (jsonData) => ({
    type: 'POST_FETCH_AUDIO_BY_TITLE',
    jsonData
})
