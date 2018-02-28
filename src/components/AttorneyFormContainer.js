import {connect} from 'react-redux';
import AttorneyForm from './AttorneyForm';
import {editAttorney, editAttorneyForm, closeAttorneyModal, makeNotesEditable, makeNotesNotEditable} from './../actions';

const mapStateToProps = state => ({
  attorneyModal: state.attorneyModal,
  attorneyForm: state.attorneyForm,
  notesEditable: state.notesEditable
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
  },
  makeNotesEditable: () => {
    dispatch(makeNotesEditable)
  },
  makeNotesNotEditable: () => {
    dispatch(makeNotesNotEditable)
  }
})

const AttorneyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttorneyForm);

export default AttorneyFormContainer;