import React, {Component} from 'react';
import {Header, Modal} from 'semantic-ui-react';

class AttorneyDetailModal extends Component {
  state = {modalOpen: false};

  handleOpen = () => this.setState({modalOpen: true});

  handleClose = () => this.setState({modalOpen: false});

  render() {
    return (
      <Modal
        trigger={<div className='addHover' onClick={this.handleOpen}>{this.props.children}</div>}
        open={this.state.modalOpen}
        onClose={this.handleClose} >
        <Header content='Attorney Details' />
        <Modal.Content>
          <div>{this.props.attorney.firstName}'s Details Here</div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default AttorneyDetailModal;