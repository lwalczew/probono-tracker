import {combineReducers} from 'redux';
import attorneys from './attorneyReducers';
import visibilityFilter from './visibilityFilterReducers';
import attorneyModalIsOpen from './attorneyModalIsOpenReducers'

const proBonoReducerCombo = combineReducers({
  attorneys,
  visibilityFilter,
  attorneyModalIsOpen
})

export default proBonoReducerCombo;
