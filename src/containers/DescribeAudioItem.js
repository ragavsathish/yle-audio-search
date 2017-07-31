import { connect } from 'react-redux';
import AudioItem from "../components/AudioItem";

const getAudioItem = (state) => {
  return state.audioItems.items.filter(item => item.expand === true)[0];
}

const mapStateToProps = (state) => ({
  audioItem: getAudioItem(state)
})

const DescribeAudioItem = connect(
  mapStateToProps
)(AudioItem)

export default DescribeAudioItem
