import * as api from './api'

describe('YLE api utility methods', () => {

  it('should apply itemsTransformer for api response', () => {
    expect(api.itemsTransformer(MOCK_API_VALID_RESPONSE)).toEqual(EXPECTED_RESULT_FOR_VALID_RESPONSE);
  });

  it('should getDescription from response data', () => {
    expect(api.getDescripition({ fi: "finnish text", sv: "swedish text" })).toEqual("finnish text");
    expect(api.getDescripition({ sv: "swedish text" })).toEqual("swedish text");
  });

  it('should getPublisher from response data', () => {
    expect(api.getPublisher([{}])).toEqual("Not availabile");
    expect(api.getPublisher([{}, {}, { publisher: [{ id: "publisher text" }] }])).toEqual("publisher text");
  });

  it('get isDownloadable from response data', () => {
    expect(api.isDownloadable([{}])).toEqual("Not availabile");
    expect(api.isDownloadable([{ media: { downloadable: true } }])).toEqual(true);
  });
})

const MOCK_API_VALID_RESPONSE = {

  meta: {
    "count": 5
  },

  data: [
    {
      "description": {
        "fi": "describe first"
      },
      "title": {
        "fi": "first title"
      },
      "id": "1-123456",
      "type": "RadioSeries",
      "publicationEvent": [{},
      {
        "publisher": [
          {
            "id": "yle-radio-vega"
          }
        ], "media": {
          "id": "6-9caa00c5aa654d369db31a64f9512726",
          "duration": "PT5M33S",
          "available": true,
          "type": "AudioObject",
          "downloadable": false,
          "version": 1500486703
        }
      }
      ],
    },
    {
      "description": {
        "fi": "describe second"
      },
      "title": {
        "fi": "second title"
      },
      "id": "1-123457",
      "type": "RadioSeries",
      "publicationEvent": [
        { "bla": "bla" },
        { "foo": "boo" },
        {
          "publisher": [
            {
              "id": "yle-radio-vega"
            }
          ],
          "media": {
            "downloadable": true
          }
        }
      ]
    }
  ]
}

const EXPECTED_RESULT_FOR_VALID_RESPONSE = {
  items: [
    { id: "1-123456", title: "first title", expand: false, description: "describe first", type: "RadioSeries", publisher: "yle-radio-vega", downloadable: false },
    { id: "1-123457", title: "second title", expand: false, description: "describe second", type: "RadioSeries", publisher: "yle-radio-vega", downloadable: true }],
  totalCount: 5
};

