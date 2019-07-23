import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase,changeDuration,addTag,removeTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: (type,value) => dispatch(changeDuration(type,value)),
  addTag: (tag, checked) => dispatch(addTag(tag, checked)),
  removeTag: (tag, checked) => dispatch(removeTag(tag, checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
