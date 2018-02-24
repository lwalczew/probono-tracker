import { blankVisibilityFilter } from "../constants";

const attorneyForm = (state = blankVisibilityFilter, action) => {
  switch (action.type) {
    case 'EDIT_ATTORNEY_FORM':
      return {...action.attorney}

    default:
      return state
  }
}

export default attorneyForm;