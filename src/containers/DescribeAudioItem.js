import { connect } from 'react-redux'

import AudioItem from "../components/AudioItem"

const selectAudioItem = (items, selectedId) => {
  return items.filter(item => item.id === selectedId)
}

const mapStateToProps = (state) => ({
  audioItem: state.length === 0 ? [] : selectAudioItem(state[0].items, state[0].selectedId)
})

const DescribeAudioItem = connect(
  mapStateToProps
)(AudioItem)

export default DescribeAudioItem
