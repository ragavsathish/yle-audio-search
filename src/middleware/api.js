import reduxApi from "redux-api";
import map from "lodash/map";
import { postSearchAudioTitles } from '../actions'

const API_ROOT = 'https://external.api.yle.fi'
const API_ID = 'd4f225af'
const APP_KEY = 'c5c5c163897a5711d68ed6fc30c54027'

const headers = {
    "User-Agent": "redux-api"
};

export default reduxApi({
    getItems: {
        url: `${API_ROOT}/v1/programs/items.json?app_id=${API_ID}&app_key=${APP_KEY}&availability=ondemand&mediaobject=audio&limit=10&q:searchText`,
        options: { headers },
        cache: { expire: 5000 },
        transformer(data) {
            return itemsTransformer(data.json());
        },
        postfetch: [
            function ({ data, actions, dispatch, getState, request }) {
                dispatch(postSearchAudioTitles(data));
            }
        ]
    }
});

const itemsTransformer = (data) => {
    const response = { ids: [], audioTiltes: [], items: [] };

    return {
        ...response, ids: data.map((d) => d.id),
        audioTiltes: data.map((d) => {
            title: d.title.fi;
            id: d.id;
            expand: false;
        }), items: {
            byId: generateItemMap(data)
        }
    }
}

const generateItemMap = (data) => {
    const itemDataById = {};
    data.forEach((d) => {
        itemDataById[d.id] = (d) => {
            return {
                id = d.id,
                description: d.description.fi,
                type: d.type,
                publisher: d.publicationEvent[1].publisher.id,
                downloadable: d.publicationEvent[1].downloadable,
            }
        };
    });
    return itemDataById;
}