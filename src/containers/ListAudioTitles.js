import { connect } from 'react-redux'
import { getAudioDetails } from '../actions'
import AudioTitles from '../components/AudioTitles'


const logger = (state) => {
  console.log(state)
  return state.response.audioTitles;
}

const mapStateToProps = (state) => ({
  audioTitles: state.length === 0 ? [] : logger(state)
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

