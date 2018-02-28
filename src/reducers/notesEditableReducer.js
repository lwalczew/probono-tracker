const notesEditable = (state = false, action) => {
  switch (action.type) {
    case 'MAKE_NOTES_EDITABLE':
      return true

    case 'MAKE_NOTES_NOT_EDITABLE':
      return false

    default:
      return state
  }
}

export default notesEditable;