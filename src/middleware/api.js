import reduxApi from "redux-api";
import { postSearchAudioTitles } from '../actions'
import adapterFetch from "redux-api/lib/adapters/fetch";

const API_ROOT = 'https://external.api.yle.fi'
const API_ID = 'd4f225af'
const APP_KEY = 'c5c5c163897a5711d68ed6fc30c54027'

const headers = {
    "User-Agent": "redux-api"
};

export default reduxApi({
    getItems: {
        url: `${API_ROOT}/v1/programs/items.json?app_id=${API_ID}&app_key=${APP_KEY}&availability=ondemand&mediaobject=audio&limit=10&q=q:searchText`,
        options: { headers },
        cache: { expire: 5000 },
        transformer(data) {
            return (data) => itemsTransformer(data.json());
        },
        postfetch: [
            function ({ data, actions, dispatch, getState, request }) {
                dispatch(postSearchAudioTitles(data));
            }
        ]
    }
}).use("fetch", adapterFetch(fetch));

export const itemsTransformer = (data) => {
    const response = { ids: [], audioTitles: [], items: [] };

    return {
        ...response, ids: data.map((d) => d.id),
        audioTitles: data.map((d) => {
            return {
            title: d.title.fi,
            id: d.id,
            expand: false,
            }
        }), items: {
            byId: generateItemMap(data)
        }
    }
}

export const generateItemMap = (data) => {
    const itemDataById = {};

    data.forEach((d) => {
        itemDataById[d.id] = {
                id: d.id,
                description: d.description.fi,
                title: d.title.fi,
                type: d.type,
                publisher: d.publicationEvent[d.publicationEvent.length - 1].publisher[0].id,
                downloadable: d.publicationEvent[d.publicationEvent.length - 1].downloadable
            }
        }
    )
    return itemDataById;
}