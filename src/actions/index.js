export const searchAudioTitles = (searchText) => ({
    type: 'SEARCH_AUDIO_BY_TITLE',
    searchText
})

export const getAudioDetails = (selectedId) => ({
    type: 'GET_AUDIO_DETAILS',
    selectedId
})

export const postSearchAudioTitles = (jsonData) => ({
    type: 'POST_SEARCH_AUDIO_BY_TITLE',
    jsonData
})
