import {connect} from 'react-redux';
import AttorneyForm from './AttorneyForm';
import {editAttorney, editAttorneyForm, closeAttorneyModal} from './../actions';

const mapStateToProps = state => ({
  attorneyModal: state.attorneyModal,
  attorneyForm: state.attorneyForm
});

const mapDispatchToProps = dispatch => ({
  editAttorney: attorney => {
    dispatch(editAttorney(attorney))
  },
  editAttorneyForm: attorney => {
    dispatch(editAttorneyForm(attorney))
  },
  closeAttorneyModal: () => {
    dispatch(closeAttorneyModal)
  }
})

const AttorneyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttorneyForm);

export default AttorneyFormContainer;