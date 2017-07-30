import { connect } from 'react-redux'
import { getAudioItem } from '../actions'
import AudioTitles from '../components/AudioTitles'

const mapStateToProps = (state) => ({
  audioTitles: state.audioItems.audioTitles
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

