const attorneyModalIsOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ATTORNEY_MODAL':
      return !action.isOpen;

    default:
      return state;
  }
}

export default attorneyModalIsOpen;