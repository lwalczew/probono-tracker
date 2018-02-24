import React, { Component } from 'react';
import './App.css';
import {Container, Grid} from 'semantic-ui-react';
import AppHeader from './components/AppHeader';
import AttorneyListContainer from './components/AttorneyListContainer';
import VisibilityFilterContainer from './components/VisibilityFilterContainer';
import AttorneyModalContainer from './components/AttorneyModalContainer';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Container style={{marginTop: '1em'}}>
          <Grid>
            <Grid.Column width={4}>
              <VisibilityFilterContainer />
            </Grid.Column>
            <Grid.Column width={12}>
              <AttorneyListContainer />
            </Grid.Column>
          </Grid>
        </Container>
        <AttorneyModalContainer />
      </div>
    );
  }
}

export default App;
