const expandSelection = (audioTitle, action) => {
    if (action.selectedId !== audioTitle.id)
        return { ...audioTitle, expand: false }
    return { ...audioTitle, expand: !audioTitle.expand };

}


const audioItems = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_AUDIO_BY_TITLE':
            let mock = getMockedAudioItems(action.searchText);
            console.log(mock)
            return { ...state, response: mock.response }
        case 'GET_AUDIO_DETAILS':
            return {
                ...state, response: {
                    ...state.response, audioTitles: state.response.audioTitles.map(audioTitle =>
                        expandSelection(audioTitle, action))
                }
            }
        default:
            return state
    }
}

export default audioItems

const getMockedAudioItems = (text) => {

    return {
        response: {
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

            items: [
                {
                    id: "1-101",
                    title: "abc-def",
                    description: "desc some text",
                    type: "radioSeries",
                    publisher: "yle-radio-service",
                    downloadable: true
                },
                {
                    id: "1-102",
                    title: "abc-def",
                    description: "desc some text",
                    type: "radioSeries",
                    publisher: "yle-radio-service",
                    downloadable: true
                }
            ]
        }
    }
}