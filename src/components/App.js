import React from 'react'
import SearchAudio from '../containers/SearchAudio'
import ListAudioTitles from '../containers/ListAudioTitles'
import DescribeAudioItem from '../containers/DescribeAudioItem'

const App = () => (
  <div>
    <SearchAudio />
    <ListAudioTitles />
    <DescribeAudioItem />
  </div>
)

export default App
