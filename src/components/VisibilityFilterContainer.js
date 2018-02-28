import {connect} from 'react-redux';
import VisibilityFilter from './VisibilityFilter';
import {setVisibilityFilter, clearVisibilityFilter} from './../actions';

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: visibilityFilter => {
    dispatch(setVisibilityFilter(visibilityFilter))
  },
  clearVisibilityFilter: () => {
    dispatch(clearVisibilityFilter)
  }
});

const VisibilityFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilter);

export default VisibilityFilterContainer;