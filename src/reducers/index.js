import { combineReducers } from "redux";
import reduxApi from "../middleware/api"

const expandSelection = (audioTitle, selectedId) => {
    if (selectedId !== audioTitle.id)
        return { ...audioTitle, expand: false }
    return { ...audioTitle, expand: !audioTitle.expand };
}

const audioItems = (state = { ids: [], audioTitles: [], items: [] }, action) => {
    switch (action.type) {
        case 'PROCESS_GET_ITEMS_RESPONSE':
            const response = action.jsonData;
            return { ...state, ids: response.ids, audioTitles: response.audioTitles, items: response.items }
        case 'GET_AUDIO_ITEM':
            return {
                ...state, audioTitles: state.audioTitles.map(audioTitle =>
                    expandSelection(audioTitle, action.selectedId))
            }
        default:
            return state
    }
}

const audioFinderApp = combineReducers({
    audioItems: audioItems,
    rest: reduxApi.reducers
});

export default audioFinderApp