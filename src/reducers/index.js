const audioItems = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_AUDIO_BY_TITLE':
            let mock = getMockedAudioItems(action.searchText);
            console.log(mock)
            return {...state, response: mock.response}
        case 'GET_AUDIO_DETAILS':
            console.log(state)
            return {...state, selectedId: action.selectedId} 
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
                    id: "1-101"
                },
                {
                    title: "abc-def-ghi",
                    id: "1-102"
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