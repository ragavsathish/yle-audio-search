import { connect } from 'react-redux'
import { getAudioDetails } from '../actions'
import AudioTitles from '../components/AudioTitles'

const mapStateToProps = (state) => ({
  audioTitles: state.length === 0 ? [] : state.response.audioTitles
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

