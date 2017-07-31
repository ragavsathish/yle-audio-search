import reduxApi from "redux-api";
import { processGetItemsResponse } from '../actions'
import fetchJsonp from 'fetch-jsonp';

const API_ROOT = 'https://external.api.yle.fi';
const API_ID = 'd4f225af';
const APP_KEY = 'c5c5c163897a5711d68ed6fc30c54027';

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
        transformer(response) {
            if (!response) return {};
            return itemsTransformer(response, `:searchText`);
        },
        postfetch: [
            function ({ data, actions, dispatch, getState, request }) {
                dispatch(processGetItemsResponse(data));
            }
        ]
    }
}).use("fetch", adapterFetchJsonp);

export const itemsTransformer = (response, searchText) => {
    const result = {items: [], totalCount: [], query: searchText};

    return {
        ...result,
        items: getAudioItems(response.data),
        totalCount: response.meta.count
    };
}

export const getAudioItems = (data) => {
    return data.map((d) => {
        return {
            title: d.title.fi ? d.title.fi : d.title.sv,
            id: d.id,
            expand: false,
            description: getDescripition(d.description),
            type: d.type,
            publisher: getPublisher(d.publicationEvent),
            downloadable: isDownloadable(d.publicationEvent)
        };
    });
}

export const getDescripition = (description) => {
    return description.fi ? description.fi : description.sv;
}

export const getPublisher = (publicationEvent) => {
    const node = publicationEvent.filter((event) => event.publisher);
    return !node[0] ? 'Not availabile' : node[0].publisher[0].id;
}

export const isDownloadable = (publicationEvent) => {
    const node = publicationEvent.filter((event) => event.media && event.media.downloadable !== undefined);
    return !node[0] ? 'Not availabile' :  node[0].media.downloadable;
}