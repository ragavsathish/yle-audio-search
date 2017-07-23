const audioItems = (state = [{ audioTitles: [], selectedId: [], items: [] }], action) => {
    switch (action.type) {
        case 'SEARCH_AUDIO_BY_NAME':
            return [...state, getMockedAudioItems(action.searchText)]
        case 'GET_AUDIO_DETAILS':
            return [
                ...state, { selectedId: action.selectedId }
            ]
        default:
            return state
    }
}

export default audioItems

const getMockedAudioItems = (text) => {
    return {
        "audioTitles": [
            {
                "title": "abc-def",
                "id": "1-101"
            },
            {
                "title": "abc-def-ghi",
                "id": "1-102"
            }
        ],

        "selectedId": "1-101",

        "items": [
            {
                "id": "1-101",
                "title": "abc-def",
                "description": "desc some text",
                "type": "radioSeries",
                "publisher": "yle-radio-service",
                "downloadable": true
            },
            {
                "id": "1-102",
                "title": "abc-def",
                "description": "desc some text",
                "type": "radioSeries",
                "publisher": "yle-radio-service",
                "downloadable": true
            }
        ]
    }
}