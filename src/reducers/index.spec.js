import audioFinderApp from './index'

describe('reducer', () => {
    it('should handle initial state', () => {
        expect(
            audioFinderApp(undefined, {})
        ).toEqual({ audioItems: { items: [], totalCount: [], fetchComplete: false } });
    })

    it('should handle PROCESS_GET_ITEMS_RESPONSE', () => {
        expect(
            audioFinderApp({ audioItems: { items: [], totalCount: [], fetchComplete: false } }, {
                type: 'PROCESS_GET_ITEMS_RESPONSE',
                jsonData: MOCKED_AUDIO_ITEMS
            })).toEqual({ audioItems: { items: MOCKED_AUDIO_ITEMS.items, totalCount: MOCKED_AUDIO_ITEMS.totalCount, fetchComplete: true } });

    })

    it('should handle GET_AUDIO_ITEM', () => {
        expect(
            audioFinderApp({ audioItems: { items: [{ id: "123", expand: false }, { id: "456", expand: false }] } }, {
                type: 'GET_AUDIO_ITEM',
                selectedId: "123"
            })).toEqual({ audioItems: { items: [{ id: "123", expand: true }, { id: "456", expand: false }] } });

        expect(
            audioFinderApp({ audioItems: { items: [{ id: "123", expand: true }, { id: "456", expand: false }] } }, {
                type: 'GET_AUDIO_ITEM',
                selectedId: "456"
            })).toEqual({ audioItems: { items: [{ id: "123", expand: false }, { id: "456", expand: true }] } });

    })

})


const MOCKED_AUDIO_ITEMS = {
    items: [
        { id: "1-123456", title: "first title", expand: false, description: "describe first", type: "RadioSeries", publisher: "yle-radio-vega", downloadable: false },
        { id: "1-123457", title: "second title", expand: false, description: "describe second", type: "RadioSeries", publisher: "yle-radio-vega", downloadable: true }],
    totalCount: 5
};

