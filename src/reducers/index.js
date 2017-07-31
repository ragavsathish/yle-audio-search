import { combineReducers } from "redux";
import reduxApi from "../middleware/api"

const expandSelection = (item, selectedId) => {
    if (item.id !== selectedId) 
        return { ...item, expand: false };
    return { ...item, expand: !item.expand }
}

const audioItems = (state = { items: [], totalCount: [], fetchComplete: false}, action) => {
    switch (action.type) {
        case 'PROCESS_GET_ITEMS_RESPONSE':
            const result = action.jsonData;
            return { ...state, items: result.items, totalCount: result.totalCount, fetchComplete: true};
        case 'GET_AUDIO_ITEM':
            return {
                ...state, items: state.items.map(item =>
                    expandSelection(item, action.selectedId))
            };
        default:
            return state;
    }
}

const audioFinderApp = combineReducers({
    audioItems: audioItems,
    rest: reduxApi.reducers
});

export default audioFinderApp