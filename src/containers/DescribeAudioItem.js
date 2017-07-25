import { connect } from 'react-redux'

import AudioItem from "../components/AudioItem"

const getAudioItem = (items, selectedId) => {
  let result = items.filter(item => item.id === selectedId)
  return result[0]
}

const mapStateToProps = (state) => ({
  audioItem: state.length === 0 ? [] : getAudioItem(state.response.items, state.selectedId)
})

const DescribeAudioItem = connect(
  mapStateToProps
)(AudioItem)
  
export default DescribeAudioItem
