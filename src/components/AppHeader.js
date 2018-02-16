import React from 'react';
import {Container, Image} from 'semantic-ui-react';
import CooleyLogo from './../icons/CooleyLogo.png';

const AppHeader = props => (
  <div className='App-header'>
    <Container>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div><Image src={CooleyLogo} size='small' /></div>
        <h1 style={{color: 'white', margin: '0 0 0 0.5em'}}>Pro Bono Attorney Finder</h1>
      </div>
    </Container>
  </div>
);

export default AppHeader;