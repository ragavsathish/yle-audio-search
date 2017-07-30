import { connect } from 'react-redux';
import AudioItem from "../components/AudioItem";

const getAudioItem = (state) => {
  let title = state.audioItems.audioTitles.filter(t => t.expand === true);
  return title.length === 0 ? [] : state.audioItems.items.byId[title[0].id];
}

const mapStateToProps = (state) => ({
  audioItem: getAudioItem(state)
})

const DescribeAudioItem = connect(
  mapStateToProps
)(AudioItem)

export default DescribeAudioItem
