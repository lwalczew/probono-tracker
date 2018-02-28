import React from 'react';
import {Form, Header} from 'semantic-ui-react';
import {offices, levels, litigationPracticeGroups, businessPracticeGroups, competencyOptions} from './../constants'

const VisibilityFilter = props => {

  //const litigationOptions = litigationPracticeGroups.map(group => (<Form.Dropdown.Item key={group.key} value={group.value} text={group.text} />));
  //const businessOptions = businessPracticeGroups.map(group => (<Form.Dropdown.Item key={group.key} value={group.value} text={group.text} />));

  const handleChange = (e, {name, value}) => {
    props.setVisibilityFilter({name, value})
  }

  const handleClear = () => {
    props.clearVisibilityFilter();
  }

  return (
    <Form>
      <Header content='Filter attorneys by...' />
      <Form.Input label='First name' name='firstName' value={props.visibilityFilter.firstName} onChange={handleChange} />
      <Form.Input label='Last name' name='lastName' value={props.visibilityFilter.lastName} onChange={handleChange} />
      <Form.Dropdown label='Office' name='office' value={props.visibilityFilter.office} onChange={handleChange} fluid search multiple selection options={offices} />
      <Form.Dropdown label='Level' name='level' value={props.visibilityFilter.level} onChange={handleChange}  fluid search selection options={[{key: 'empty', text: '(clear selection)', value: ''}, ...levels]} />
      <Form.Dropdown label='Practice Group' name='practiceGroup' value={props.visibilityFilter.practiceGroup} onChange={handleChange} fluid search selection options={[{key: 'empty', text: '(clear selection)', value: ''}, ...litigationPracticeGroups, ...businessPracticeGroups]} />
      <Form.Dropdown label='Competencies' name='competencies' value={props.visibilityFilter.competencies} onChange={handleChange} fluid search multiple selection options={competencyOptions} />
      <Form.Dropdown label='In search of...' name='inSearchOf' value={props.visibilityFilter.inSearchOf} onChange={handleChange} fluid search multiple selection options={competencyOptions} />
      <Form.Input label='Notes' name='notes' value={props.visibilityFilter.notes} onChange={handleChange} />
      <Form.Button content='Reset Filters' onClick={handleClear} />
    </Form>
  )
}

export default VisibilityFilter;