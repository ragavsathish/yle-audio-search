import { connect } from 'react-redux';
import { getAudioItem } from '../actions';
import AudioTitles from '../components/AudioTitles';

const mapStateToProps = (state) => ({
  audioItems: state.audioItems.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTitleClick: (id) => {
    dispatch(getAudioItem(id))
  }
})

const ListAudioTitles = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioTitles)

export default ListAudioTitles

