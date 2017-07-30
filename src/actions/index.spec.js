import * as actions from './index';

describe('YLE audio finder actions', () => {

  it('processGetItemsResponse should create PROCESS_GET_ITEMS_RESPONSE action', () => {
    expect(actions.processGetItemsResponse({ json: true })).toEqual({
      type: 'PROCESS_GET_ITEMS_RESPONSE',
      jsonData: { json: true }
    })
  });

  it('getAudioItem should create GET_AUDIO_ITEM action ', () => {
    expect(actions.getAudioItem('1-123456')).toEqual({
      type: 'GET_AUDIO_ITEM',
      selectedId: '1-123456'
    })
  });
})