import * as api from './api'

describe('YLE api methods', () => {
	const expectedItems = {
				"1-123456": { id: "1-123456", title: "first title", description: "describe first", type: "RadioSeries", publisher: "yle-radio-vega", downloadable: false},
				"1-123457": { id: "1-123457", title: "second title", description: "describe second", type: "RadioSeries", publisher: "yle-radio-vega", downloadable: true}
		};
	it('generateItemMap from json data', () => {
		expect(api.generateItemMap(MOCK_JSON_DATA.data)).toEqual(expectedItems)
	}),
	it('itemsTransformer for api response', () =>{
		expect(api.itemsTransformer(MOCK_JSON_DATA.data)).toEqual({
			ids: ["1-123456", "1-123457"],
			audioTitles: [{title: "first title", id: "1-123456", expand: false}, {title: "second title", id: "1-123457", expand: false}],
			items: {byId : expectedItems} 
		})
	})
}) 

const MOCK_JSON_DATA = {
  data : [
  {
    "description": {
          "fi": "describe first"
      },
        "title": {
          "fi": "first title"
        },
        "id": "1-123456",
        "type": "RadioSeries",
        "publicationEvent": [
        {
            "publisher": [
              {
                "id": "yle-radio-vega"
              }
        ],
        "downloadable" :false
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
        	{"bla": "bla"},
        	{"foo": "boo"},
            { "publisher": [
              {
                "id": "yle-radio-vega"
              }
        	],
        	"downloadable" :true
        	}
    	]
       }
	]
}