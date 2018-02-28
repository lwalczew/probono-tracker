import {connect} from 'react-redux';
import AttorneyList from './AttorneyList';
import {openAttorneyModal, editAttorneyForm} from './../actions';

const getVisibleAttorneys = (attorneys, visibilityFilter) => {
  return attorneys
    .filter(attorney => visibilityFilter.firstName.length > 0 ? attorney.firstName.toUpperCase().includes(visibilityFilter.firstName.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.lastName.length > 0 ? attorney.lastName.toUpperCase().includes(visibilityFilter.lastName.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.office.length > 0 ? visibilityFilter.office.includes(attorney.office) : true)
    .filter(attorney => visibilityFilter.level.length > 0 ? attorney.level.toUpperCase().includes(visibilityFilter.level.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.practiceGroup.length > 0 ? attorney.practiceGroup.toUpperCase().includes(visibilityFilter.practiceGroup.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.competencies.length > 0 ? attorney.competencies.reduce((a,b) => a + '.,.' + b).toUpperCase().includes(visibilityFilter.competencies.reduce((a,b) => a + '.,.' + b).toUpperCase()) : true)
    .filter(attorney => visibilityFilter.inSearchOf.length > 0 ? attorney.inSearchOf.reduce((a,b) => a + '.,.' + b).toUpperCase().includes(visibilityFilter.inSearchOf.reduce((a,b) => a + '.,.' + b).toUpperCase()) : true)
    .filter(attorney => visibilityFilter.notes.length > 0 ? attorney.notes.toUpperCase().includes(visibilityFilter.notes.toUpperCase()) : true)
    .sort((a,b) => {
      const nameA = a.lastName.toUpperCase();
      const nameB = b.lastName.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameB < nameA) return 1;
      return 0;
    })
};

const mapStateToProps = state => ({
  visibleAttorneys: getVisibleAttorneys(state.attorneys, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  openAttorneyModal: (id) => {
    dispatch(openAttorneyModal(id))
  },
  editAttorneyForm: attorney => {
    dispatch(editAttorneyForm(attorney))
  }
})

const AttorneyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttorneyList);

export default AttorneyListContainer;