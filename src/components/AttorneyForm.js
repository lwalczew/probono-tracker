import React from 'react';
import {Button, Dropdown, Header, Popup, Table, TextArea} from 'semantic-ui-react';
import {competencyOptions} from './../constants';

const AttorneyForm = props => {

  const attorney = JSON.parse(JSON.stringify(props.attorneyForm))

  const competenciesButtons = attorney.competencies.map(comp => <Popup key={comp} trigger={<Button className='redHover' style={{margin: '0.25em'}} key={comp} content={comp} value={comp} onClick={() => deleteCompetency(comp)} />} content='Click to remove'/>)
  const noCompetencyDropdownOptions = competencyOptions.filter(comp => !attorney.competencies.includes(comp.value));
  const inSearchOfButtons = attorney.inSearchOf.map(iso => <Popup key={iso} trigger={<Button className='redHover' style={{margin: '0.25em'}} key={iso} content={iso} value={iso} onClick={() => deleteInSearchOf(iso)} />} content='Click to remove' />)
  const notInSearchOfDropdownOptions = competencyOptions.filter(comp => !attorney.inSearchOf.includes(comp.value));

  const handleCompetencyChange = (e, {value}) => {
    attorney.competencies.push(value);
    attorney.competencies = attorney.competencies.sort((a,b) => {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameB < nameA) return 1;
      return 0;
    })
    props.editAttorneyForm(attorney);
  }

  const handleInSearchOfChange = (e, {value}) => {
    attorney.inSearchOf.push(value);
    attorney.inSearchOf = attorney.inSearchOf.sort((a,b) => {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameB < nameA) return 1;
      return 0;
    })
    props.editAttorneyForm(attorney);
  }
  
  const deleteCompetency = comp => {
    attorney.competencies.splice(attorney.competencies.indexOf(comp), 1);
    props.editAttorneyForm(attorney)
  }

  const deleteInSearchOf = iso => {
    attorney.inSearchOf.splice(attorney.inSearchOf.indexOf(iso), 1);
    props.editAttorneyForm(attorney)
  }

  const handleNotesChange = (e) => {
    attorney.notes = e.target.value;
    props.editAttorneyForm(attorney);
  }

  const handleSubmit = () => {
    props.editAttorney(attorney);
    props.closeAttorneyModal();
    props.makeNotesNotEditable();
  }

  const handleCancelAndClear = () => {
    props.closeAttorneyModal();
    props.makeNotesNotEditable();
  }

  const showNotesWithLineBreaks = () => ({__html: attorney.notes.replace(/\r\n?|\n/g, "<br />")});

  // Bullet points option for showNotesWithLineBreaks
  //const showNotesWithLineBreaks = () => ({__html: "<ul><li>" + attorney.notes.replace(/\r\n?|\n/g, "</li><li>") + "</li></ul>"})

  return (
    <div>
      <Table basic='very'>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <div><Header style={{marginBottom: '2px', paddingRight: '0.5em'}} as='h3' content='Competencies:' /></div>
              <div><Dropdown selectOnBlur={false} placeholder='Add competency' search selection options={noCompetencyDropdownOptions} onChange={handleCompetencyChange} /></div>
            </Table.Cell>
            <Table.Cell><div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>{competenciesButtons}</div></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <div><Header style={{marginBottom: '2px', paddingRight: '0.5em'}} as='h3' content='In search of:' /></div>
              <div><Dropdown selectOnBlur={false} placeholder='Add in search of' search selection options={notInSearchOfDropdownOptions} onChange={handleInSearchOfChange} /></div>
            </Table.Cell>
            <Table.Cell><div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>{inSearchOfButtons}</div></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <div><Header style={{marginBottom: '2px', paddingRight: '0.5em'}} as='h3' content='Notes:' /></div>
              <div>{props.notesEditable 
                ? <Button compact content='Done Editing' positive onClick={props.makeNotesNotEditable}/> 
                : <Button compact content='Edit notes' onClick={props.makeNotesEditable}/>}</div>
            </Table.Cell>
            <Table.Cell>
              {props.notesEditable
                ? <TextArea autoHeight style={{width: '100%'}} value={attorney.notes} onChange={handleNotesChange} />
                : <div onClick={props.makeNotesEditable} dangerouslySetInnerHTML={showNotesWithLineBreaks()} ></div>}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div style={{marginTop: '1em', display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={handleSubmit} content='Save changes' positive />
        <Button onClick={handleCancelAndClear} content='Cancel and clear changes' negative />
      </div>
    </div>
  )
}

export default AttorneyForm;