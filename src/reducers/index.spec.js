import audioFinderApp from './index'

describe('reducer', () => {
    it('should handle initial state', () => {
        expect(
            audioFinderApp(undefined, {})
        ).toEqual({ audioItems: { ids: [], audioTitles: [], items: [] } })
    })

    it('should handle PROCESS_GET_ITEMS_RESPONSE', () => {
        expect(
            audioFinderApp({ audioItems: { ids: [], audioTitles: [], items: [] } }, {
                type: 'PROCESS_GET_ITEMS_RESPONSE',
                jsonData: MOCKED_AUDIO_ITEMS
            })).toEqual({ audioItems: MOCKED_AUDIO_ITEMS })

    })

    it('should handle GET_AUDIO_ITEM', () => {
        expect(
            audioFinderApp({ audioItems: MOCKED_AUDIO_ITEMS }, {
                type: 'GET_AUDIO_ITEM',
                selectedId: "1-101"
            })).toEqual({
                audioItems: {
                    ...MOCKED_AUDIO_ITEMS, audioTitles: [{
                        title: "abc-def",
                        id: "1-101",
                        expand: true
                    },
                    {
                        title: "abc-def-ghi",
                        id: "1-102",
                        expand: false
                    }]
                }
            }
            )

        expect(
            audioFinderApp({
                audioItems: {
                    ...MOCKED_AUDIO_ITEMS, audioTitles: [{
                        title: "abc-def",
                        id: "1-101",
                        expand: true
                    },
                    {
                        title: "abc-def-ghi",
                        id: "1-102",
                        expand: false
                    }]
                }
            }, {
                type: 'GET_AUDIO_ITEM',
                    selectedId: "1-102"
                })).toEqual({
                    audioItems: {
                        ...MOCKED_AUDIO_ITEMS, audioTitles: [{
                            title: "abc-def",
                            id: "1-101",
                            expand: false
                        },
                        {
                            title: "abc-def-ghi",
                            id: "1-102",
                            expand: true
                        }]
                    }
                }
            )
    })

})

const MOCKED_AUDIO_ITEMS = {

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

