import { connect } from 'react-redux'
import { getAudioDetails } from '../actions'
import AudioTitles from '../components/AudioTitles'

const mapStateToProps = (state) => ({
  audioTitles: state.length ===0 ? [] : getTitles(state)
})

const mapDispatchToProps = {
  onTitleClick: getAudioDetails
}

const getTitles = (state) => {
  console.log(state[0].audioTitles);
  return state[0].audioTitles;
}

const ListAudioTitles = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioTitles)

export default ListAudioTitles

