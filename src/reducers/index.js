const expandSelection = (audioTitle, selectedId) => {
    if (selectedId !== audioTitle.id)
        return { ...audioTitle, expand: false }
    return { ...audioTitle, expand: !audioTitle.expand };
}


const audioItems = (state = { ids: [], audioTitles: [], items: [] }, action) => {
    switch (action.type) {
        case 'SEARCH_AUDIO_BY_TITLE':
            const response = getMockedAudioItems(action.searchText).response;
            return { ...state, ids: response.ids, audioTitles: response.audioTitles, items: response.items }
        case 'POST_SEARCH_AUDIO_BY_TITLE':
            const response = action.jsonData;
            return { ...state, ids: response.ids, audioTitles: response.audioTitles, items: response.items }
        case 'GET_AUDIO_DETAILS':
            return {
                ...state, audioTitles: state.audioTitles.map(audioTitle =>
                    expandSelection(audioTitle, action.selectedId))
            }
        default:
            return state
    }
}

export default audioItems

const getMockedAudioItems = (text) => {

    return {
        response: {
            ids: ["1-101", "1-102"],
            audioTitles: [
                {
                    title: "abc-def",
                    id: "1-101",
                    expand: false
                },
                {
                    title: "abc-def-ghi",
                    id: "1-102",
                    expand: false
                }
            ],
            items: {
                byId: {
                    "1-101":
                    {
                        id: "1-101",
                        title: "abc-def",
                        description: "desc some text",
                        type: "radioSeries",
                        publisher: "yle-radio-service",
                        downloadable: true
                    },
                    "1-102":
                    {
                        id: "1-102",
                        title: "abc-def",
                        description: "desc some text",
                        type: "radioSeries",
                        publisher: "yle-radio-service",
                        downloadable: true
                    }
                }
            }
        }
    }
}