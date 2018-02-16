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

export const toggleAttorneyModal = isOpen => ({
  type: 'TOGGLE_ATTORNEY_MODAL',
  isOpen
})