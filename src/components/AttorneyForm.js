import React from 'react';
import {Button, Dropdown, Header, Popup} from 'semantic-ui-react';
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

  const handleSubmit = () => {
    props.editAttorney(attorney);
    props.closeAttorneyModal();
  }

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '0.5em 0'}}>
        <Header style={{marginBottom: '2px', paddingRight: '0.5em'}} as='h3' content='Competencies:' />
        {competenciesButtons}
        <Dropdown placeholder='Add competency' search selection options={noCompetencyDropdownOptions} onChange={handleCompetencyChange} />
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '0.5em 0'}}>
        <Header style={{marginBottom: '2px', paddingRight: '0.5em'}} as='h3' content='In search of:' /> 
        {inSearchOfButtons}
        <Dropdown placeholder='Add in search of' search selection options={notInSearchOfDropdownOptions} onChange={handleInSearchOfChange} />
      </div>
      <div style={{marginTop: '1em', display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={handleSubmit} content='Save changes' positive />
        <Button onClick={props.closeAttorneyModal} content='Cancel and clear changes' negative />
      </div>
    </div>
  )
}

export default AttorneyForm;