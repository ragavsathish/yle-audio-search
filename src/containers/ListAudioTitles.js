import { connect } from 'react-redux'
import { getAudioDetails } from '../actions'
import AudioTitles from '../components/AudioTitles'

const mapStateToProps = (state) => ({
  audioTitles: state.audioTitles
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTitleClick: (id) => {
    dispatch(getAudioDetails(id))
  }
})

const ListAudioTitles = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioTitles)

export default ListAudioTitles

