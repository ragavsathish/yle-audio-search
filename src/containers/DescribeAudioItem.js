import { connect } from 'react-redux'

import AudioItem from "../components/AudioItem"

const getAudioItem = (response) => {
  let title = response.audioTitles.filter(title => title.expand === true);
  if (title.length !== 0) {
    let result = response.items.filter(item => item.id === title[0].id);
    return result[0]
  }
  return []
}

const mapStateToProps = (state) => ({
  audioItem: state.length === 0 ? [] : getAudioItem(state.response)
})

const DescribeAudioItem = connect(
  mapStateToProps
)(AudioItem)

export default DescribeAudioItem
