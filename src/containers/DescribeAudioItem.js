import { connect } from 'react-redux'
import AudioItem from "../components/AudioItem"

const selectAudioItem = (items, selectedId) => {
  return items.filter(items => item.id === selectedId)
}

const mapStateToProps = (state) => ({
  audioItem: selectAudioItem(state.items, state.selectedId)
})

const DescribeAudioItem = connect(
  mapStateToProps
)(AudioItem)

export default DescribeAudioItem
