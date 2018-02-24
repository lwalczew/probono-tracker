import React from 'react';
import {Header, Modal} from 'semantic-ui-react';
import {blankVisibilityFilter} from './../constants';
import AttorneyFormContainer from './AttorneyFormContainer';

const AttorneyDetailModal = props => {

  const attorney = props.attorneyModal === false ? blankVisibilityFilter : props.attorneys.filter(attorney => attorney.id === props.attorneyModal)[0];

  return (
    <Modal
      open={props.attorneyModal !== false}
      onClose={props.closeAttorneyModal}
      closeIcon
      closeOnDimmerClick={false} >
      <Header content={`${attorney.firstName} ${attorney.lastName}\xa0\xa0\xa0\u2022\xa0\xa0\xa0${attorney.office}\xa0\xa0\xa0\u2022\xa0\xa0\xa0${attorney.level} (${attorney.attorneyStartYear})\xa0\xa0\xa0\u2022\xa0\xa0\xa0${attorney.practiceGroup}`} />
      <Modal.Content>
        <AttorneyFormContainer />
      </Modal.Content>
    </Modal>
  )
}

export default AttorneyDetailModal;