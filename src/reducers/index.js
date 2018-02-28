import {combineReducers} from 'redux';
import attorneys from './attorneyReducers';
import visibilityFilter from './visibilityFilterReducers';
import attorneyModal from './attorneyModalReducers';
import attorneyForm from './attorneyFormReducers';
import notesEditable from './notesEditableReducer';

const proBonoReducerCombo = combineReducers({
  attorneys,
  visibilityFilter,
  attorneyModal,
  attorneyForm,
  notesEditable
})

export default proBonoReducerCombo;
