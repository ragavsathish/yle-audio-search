import * as actions from './index'

describe('YLE audio finder actions', () => {
  it('searchAudioTitles should create SEARCH_AUDIO_BY_TITLE action', () => {
    expect(actions.searchAudioTitles('search_text')).toEqual({
      type: 'SEARCH_AUDIO_BY_TITLE',
      searchText: 'search_text'
    })
  })

  it('getAudioDetails should create GET_AUDIO_DETAILS action', () => {
    expect(actions.getAudioDetails('1-101')).toEqual({
      type: 'GET_AUDIO_DETAILS',
      selectedId: '1-101'
    })
  })
})