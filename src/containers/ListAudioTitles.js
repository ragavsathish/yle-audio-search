import { connect } from 'react-redux'
import { getAudioDetails } from '../actions'
import AudioTitles from '../components/AudioTitles'

const debugState = (state) => {
	console.log(state);
	return state.audioItems.audioTitles;
}

const mapStateToProps = (state) => ({
  audioTitles: debugState(state)
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

