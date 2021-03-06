import {blankVisibilityFilter} from './../constants'

const visibilityFilter = (state = blankVisibilityFilter, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {...state, [action.filter.name]: action.filter.value}

    case 'CLEAR_VISIBILITY_FILTER':
      return blankVisibilityFilter

    default:
      return state
  }
}

export default visibilityFilter;