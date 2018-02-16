import {startData} from './../constants';

const attorneys = (state = startData, action) => {
  switch (action.type) {
    case 'ADD_ATTORNEY':
      return [...state, action.attorney]

    case 'EDIT_ATTORNEY':
      const otherAttorneys = state.filter(attorney => attorney.id !== action.attorney.id);
      return [...otherAttorneys, action.attorney]

    case 'DELETE_ATTORNEY':
      return state.filter(attorney => attorney.id !== action.id)

    default:
      return state
  }
}

export default attorneys;