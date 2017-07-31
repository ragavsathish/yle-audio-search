import { connect } from "react-redux";
import { getAudioItem } from "../actions";
import AudioTitles from "../components/AudioTitles";

const mapStateToProps = (state) => ({
  audioItems: state.audioItems.items,
  message:  state.audioItems.totalCount ? "Displaying 10 of " + state.audioItems.totalCount.toString() + " results" : "No results found",
  fetchComplete : state.audioItems.fetchComplete
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

