import reduxApi from "redux-api";
import { postFetchAudioTitles } from '../actions'
import fetchJsonp from 'fetch-jsonp';

const API_ROOT = 'https://external.api.yle.fi'
const API_ID = 'd4f225af'
const APP_KEY = 'c5c5c163897a5711d68ed6fc30c54027'

const headers = {
    "User-Agent": "redux-api"
};

const adapterFetchJsonp = (url, opts) => {
    return fetchJsonp(url, opts)
        .then((resp) => resp.json())
        .catch((ex) => { console.log('Exception in fetching from API', ex); });
}

export default reduxApi({
    getItems: {
        url: `${API_ROOT}/v1/programs/items.json?app_id=${API_ID}&app_key=${APP_KEY}&availability=ondemand&mediaobject=audio&limit=10&q=:searchText`,
        options: { headers },
        cache: { expire: 5000 },
        transformer(data) {
            if (!data) return {};
            return itemsTransformer(data.data);
        },
        postfetch: [
            function ({ data, actions, dispatch, getState, request }) {
                dispatch(postFetchAudioTitles(data));
            }
        ]
    }
}).use("fetch", adapterFetchJsonp);

export const itemsTransformer = (data) => {
    const response = { ids: [], audioTitles: [], items: [] };

    return {
        ...response, 
        ids: data.map((d) => d.id),
        audioTitles: data.map((d) => {
            return {
                title: d.title.fi,
                id: d.id,
                expand: false,
            }
        }),
        items: {
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
            publisher: getPublisher(d.publicationEvent),
            downloadable: isDownloadable(d.publicationEvent)
        }
    })
    return itemDataById;
}

export const getDescripition = (description) => {
    return description.fi !== undefined ? description.fi : description.sv;
}

export const getPublisher = (publicationEvent) => {
    const node = publicationEvent[publicationEvent.length - 1];
    return node === undefined ? 'Not availabile' : node.publisher[0].id;
}

export const isDownloadable = (publicationEvent) => {
    const node = publicationEvent[publicationEvent.length - 1];
    return node === undefined ? 'Not availabile' : node.downloadable;
}