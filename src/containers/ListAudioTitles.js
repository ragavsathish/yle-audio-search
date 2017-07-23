import { connect } from 'react-redux'
import { getAudioDetails } from '../actions'
import AudioTitles from '../components/AudioTitles'

const mapStateToProps = (state) => ({
  audioTitles: state.audioTitles
})

const mapDispatchToProps = {
  onClick: getAudioDetails
}


const ListAudioTitles = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioTitles)

export default ListAudioTitles

