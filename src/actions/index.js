export const processGetItemsResponse = (jsonData) => ({
    type: "PROCESS_GET_ITEMS_RESPONSE",
    jsonData
})

export const getAudioItem = (selectedId) => ({
    type: "GET_AUDIO_ITEM",
    selectedId
})

