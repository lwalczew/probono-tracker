const attorneyModal = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_ATTORNEY_MODAL':
      return action.id.slice(0);

    case 'CLOSE_ATTORNEY_MODAL':
      return false;
    
    default:
      return state;
  }
}

export default attorneyModal;