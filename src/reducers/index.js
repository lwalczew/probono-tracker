import {combineReducers} from 'redux';
import attorneys from './attorneyReducers';
import visibilityFilter from './visibilityFilterReducers';
import attorneyModal from './attorneyModalReducers';
import attorneyForm from './attorneyFormReducers';

const proBonoReducerCombo = combineReducers({
  attorneys,
  visibilityFilter,
  attorneyModal,
  attorneyForm
})

export default proBonoReducerCombo;
