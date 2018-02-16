import {connect} from 'react-redux';
import AttorneyList from './AttorneyList';

const getVisibleAttorneys = (attorneys, visibilityFilter) => {
  return attorneys
    .filter(attorney => visibilityFilter.firstName.length > 0 ? attorney.firstName.toUpperCase().includes(visibilityFilter.firstName.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.lastName.length > 0 ? attorney.lastName.toUpperCase().includes(visibilityFilter.lastName.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.office.length > 0 ? visibilityFilter.office.includes(attorney.office) : true)
    .filter(attorney => visibilityFilter.level.length > 0 ? attorney.level.toUpperCase().includes(visibilityFilter.level.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.practiceGroup.length > 0 ? attorney.practiceGroup.toUpperCase().includes(visibilityFilter.practiceGroup.toUpperCase()) : true)
    .filter(attorney => visibilityFilter.competencies.length > 0 ? attorney.competencies.reduce((a,b) => a + '.,.' + b).toUpperCase().includes(visibilityFilter.competencies.reduce((a,b) => a + '.,.' + b).toUpperCase()) : true)
    .filter(attorney => visibilityFilter.inSearchOf.length > 0 ? attorney.inSearchOf.reduce((a,b) => a + '.,.' + b).toUpperCase().includes(visibilityFilter.inSearchOf.reduce((a,b) => a + '.,.' + b).toUpperCase()) : true)
    .filter(attorney => visibilityFilter.projects.length > 0 ? attorney.projects.reduce((a, project) => a + `${project.client}.,.${project.notes}.,.`, '').toUpperCase().includes(visibilityFilter.projects.toUpperCase()) : true)
};

const mapStateToProps = state => ({
  visibleAttorneys: getVisibleAttorneys(state.attorneys, state.visibilityFilter)
});

const AttorneyListContainer = connect(
  mapStateToProps
)(AttorneyList);

export default AttorneyListContainer;