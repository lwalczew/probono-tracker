import React from 'react';
import {Icon, Table} from 'semantic-ui-react';
import AttorneyDetailModal from './AttorneyDetailModal'

const AttorneyList = (props) => {
  
  const handleClick = () => console.log('hi')

  const tableRows = props.visibleAttorneys.map(attorney => (
        <Table.Row key={attorney.id} onClick={handleClick}>
          <Table.Cell><AttorneyDetailModal attorney={attorney}>{attorney.lastName}, {attorney.firstName}</AttorneyDetailModal></Table.Cell>
          <Table.Cell>{attorney.office}</Table.Cell>
          <Table.Cell>{attorney.level}</Table.Cell>
          <Table.Cell>{attorney.practiceGroup}</Table.Cell>
        </Table.Row>
  ))

  return (
    props.visibleAttorneys.length > 0
      ? 
      <Table celled selectable sortable striped textAlign='left' verticalAlign='top'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Office</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
            <Table.HeaderCell>Practice Group</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableRows}
        </Table.Body>
      </Table>
      :
      <div style={{marginTop: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Icon name='help circle outline' size='huge' color='orange'/>
        <h1>No attoneys match your selected filters.</h1>
        <h1>Please clear/change your filters to view attorneys.</h1>
    </div>
  )
}

export default AttorneyList;