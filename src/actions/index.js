export const addAttorney = attorney => ({
  type: 'ADD_ATTORNEY',
  attorney
})

export const editAttorney = attorney => ({
  type: 'EDIT_ATTORNEY',
  attorney
})

export const deleteAttorney = id => ({
  type: 'DELETE_ATTORNEY',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const clearVisibilityFilter = {
  type: 'CLEAR_VISIBILITY_FILTER'
}

export const openAttorneyModal = id => ({
  type: 'OPEN_ATTORNEY_MODAL',
  id
})

export const closeAttorneyModal = {
  type: 'CLOSE_ATTORNEY_MODAL'
}

export const editAttorneyForm = attorney => ({
  type: 'EDIT_ATTORNEY_FORM',
  attorney
})

export const makeNotesEditable = {
  type: 'MAKE_NOTES_EDITABLE'
}

export const makeNotesNotEditable = {
  type: 'MAKE_NOTES_NOT_EDITABLE'
}