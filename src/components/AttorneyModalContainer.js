import {connect} from 'react-redux';
import AttorneyModal from './AttorneyModal';
import {closeAttorneyModal} from './../actions';

const mapStateToProps = state => ({
  attorneyModal: state.attorneyModal,
  attorneys: state.attorneys
})

const mapDispatchToProps = dispatch => ({
  closeAttorneyModal: () => {
    dispatch(closeAttorneyModal)
  }
})

const AttorneyModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttorneyModal);

export default AttorneyModalContainer;