export const startData = [
  {
    id: '1',
    firstName: 'Erin',
    lastName: 'Walczewski',
    office: 'Boston',
    level: 'Associate',
    attorneyStartYear: '2010',
    cooleyStartYear: '2010',
    practiceGroup: 'Venture Capital',
    competencies: ['Asylum','Immigrants\' rights'],
    inSearchOf: ['Asylum','Immigrants\' rights'],
    projects: [
      {
        client: 'Kids in Need of Defense (KIND)',
        startDate: '11/5/2011',
        endDate: '',
        notes: 'Marcos. Very difficult case.'
      }
    ]
  },
  {
    id: '2',
    firstName: 'Karen',
    lastName: 'Burhans',
    office: 'San Francisco',
    level: 'Associate',
    attorneyStartYear: '2010',
    cooleyStartYear: '2010',
    practiceGroup: 'Business Litigation',
    competencies: ['Asylum','Immigrants\' rights'],
    inSearchOf: ['Asylum','Immigrants\' rights'],
    projects: [
      {
        client: 'Kids in Need of Defense (KIND)',
        startDate: '11/5/2011',
        endDate: '',
        notes: 'Marcos. Very difficult case.'
      }
    ]
  },
  {
    id: '3',
    firstName: 'Mark',
    lastName: 'Pitchford',
    office: 'Palo Alto',
    level: 'Partner',
    attorneyStartYear: '1981',
    cooleyStartYear: '1981',
    practiceGroup: 'General Corporate',
    competencies: ['Asylum', 'Education','Immigrants\' rights'],
    inSearchOf: ['Asylum','Immigrants\' rights'],
    projects: []
  },
  {
    id: '4',
    firstName: 'Joe',
    lastName: 'Conroy',
    office: 'Reston',
    level: 'Partner',
    attorneyStartYear: '1981',
    cooleyStartYear: '1981',
    practiceGroup: 'General Corporate',
    competencies: ['Disability rights','Elder abuse'],
    inSearchOf: ['Asylum'],
    projects: []
  }
];

export const blankVisibilityFilter = {
  firstName: '',
  lastName: '',
  office: [],
  level: '',
  practiceGroup: '',
  competencies: [],
  inSearchOf: [],
  projects: []
}

export const levels = [
  { key: 'associate', text: 'Associate', value: 'Associate' },
  { key: 'partner', text: 'Partner', value: 'Partner' },
  { key: 'ofCounsel', text: 'Of Counsel', value: 'Of Counsel' }
]

export const offices = [
  { key: 'beijing', text: 'Beijing', value: 'Beijing' },
  { key: 'boston', text: 'Boston', value: 'Boston' },
  { key: 'colorado', text: 'Colorado', value: 'Colorado' },
  { key: 'london', text: 'London', value: 'London' },
  { key: 'losAngeles', text: 'Los Angeles', value: 'Los Angeles' },
  { key: 'newYork', text: 'New York', value: 'New York' },
  { key: 'paloAlto', text: 'Palo Alto', value: 'Palo Alto' },
  { key: 'reston', text: 'Reston', value: 'Reston' },
  { key: 'sanDiego', text: 'San Diego', value: 'San Diego' },
  { key: 'sanFrancisco', text: 'San Francisco', value: 'San Francisco' },
  { key: 'seattle', text: 'Seattle', value: 'Seattle' },
  { key: 'shanghai', text: 'Shanghai', value: 'Shanghai' },
  { key: 'washingtonDC', text: 'Washington, DC', value: 'Washington, DC' }
]

export const litigationPracticeGroups = [
  {key: 'businessLitigation', text: 'Business Litigation', value: 'Business Litigation'},
  {key: 'employmentLabor', text: 'Employment & Labor', value: 'Employment & Labor'},
  {key: 'IPLitigation', text: 'IP Litigation', value: 'IP Litigation'},
  {key: 'patentProsecution', text: 'Patent Prosecution', value: 'Patent Prosecution'},
  {key: 'securitiesLitigation', text: 'Securities Litigation', value: 'Securities Litigation'},
  {key: 'trademarkCopyright', text: 'Trademark & Copyright', value: 'Trademark & Copyright'}
]

export const businessPracticeGroups = [
  {key: 'antitrust', text: 'Antitrust', value: 'Antitrust'},
  {key: 'bankruptcy', text: 'Bankruptcy', value: 'Bankruptcy'},
  {key: 'compBen', text: 'Comp. & Benefits', value: 'Comp. & Benefits'},
  {key: 'creditFinance', text: 'Credit Finance', value: 'Credit Finance'},
  {key: 'education', text: 'Education', value: 'Education'},
  {key: 'generalCorporate', text: 'General Corporate', value: 'General Corporate'},
  {key: 'intlTradeGovContracts', text: 'Intl. Trade & Govt. Contracts', value: 'Intl. Trade & Govt. Contracts'},
  {key: 'lifeSciencesPartnering', text: 'Life Sciences Partnering', value: 'Life Sciences Partnering'},
  {key: 'mergersAcq', text: 'Mergers & Acq.', value: 'Mergers & Acq.'},
  {key: 'personalRepresentation', text: 'Personal Representation', value: 'Personal Representation'},
  {key: 'realEstate', text: 'Real Estate', value: 'Real Estate'},
  {key: 'regulatory', text: 'Regulatory', value: 'Regulatory'},
  {key: 'tax', text: 'Tax', value: 'Tax'},
  {key: 'ttg', text: 'TTG', value: 'TTG'},
  {key: 'ventureCapital', text: 'Venture Capital', value: 'Venture Capital'}
]

export const competencyOptions = [
  { key: 'Appeals', text: 'Appeals', value: 'Appeals' },
  { key: 'Asylum', text: 'Asylum', value: 'Asylum' },
  { key: 'Bankruptcy', text: 'Bankruptcy', value: 'Bankruptcy' },
  { key: 'Capital punishment', text: 'Capital punishment', value: 'Capital punishment' },
  { key: 'Children\'s rights', text: 'Children\'s rights', value: 'Children\'s rights' },
  { key: 'Civil rights', text: 'Civil rights', value: 'Civil rights' },
  { key: 'Constitutional law', text: 'Constitutional law', value: 'Constitutional law' },
  { key: 'Contract law', text: 'Contract law', value: 'Contract law' },
  { key: 'Corporate governance', text: 'Corporate governance', value: 'Corporate governance' },
  { key: 'Criminal law', text: 'Criminal law', value: 'Criminal law' },
  { key: 'Disability rights', text: 'Disability rights', value: 'Disability rights' },
  { key: 'Domestic violence', text: 'Domestic violence', value: 'Domestic violence' },
  { key: 'Education', text: 'Education', value: 'Education' },
  { key: 'Elder abuse', text: 'Elder abuse', value: 'Elder abuse' },
  { key: 'Employment law', text: 'Employment law', value: 'Employment law' },
  { key: 'Entity formation', text: 'Entity formation', value: 'Entity formation' },
  { key: 'Environmental law', text: 'Environmental law', value: 'Environmental law' },
  { key: 'First Amendment', text: 'First Amendment', value: 'First Amendment' },
  { key: 'Guardianship', text: 'Guardianship', value: 'Guardianship' },
  { key: 'Housing', text: 'Housing', value: 'Housing' },
  { key: 'Homeless advocacy', text: 'Homeless advocacy', value: 'Homeless advocacy' },
  { key: 'Human rights', text: 'Human rights', value: 'Human rights' },
  { key: 'Immigrants\' rights', text: 'Immigrants\' rights', value: 'Immigrants\' rights' },
  { key: 'Intellectual property', text: 'Intellectual property', value: 'Intellectual property' },
  { key: 'LGBT rights', text: 'LGBT rights', value: 'LGBT rights' },
  { key: 'Mental health advocacy', text: 'Mental health advocacy', value: 'Mental health advocacy' },
  { key: 'Micro-enterprise advising', text: 'Micro-enterprise advising', value: 'Micro-enterprise advising' },
  { key: 'Micro-finance', text: 'Micro-finance', value: 'Micro-finance' },
  { key: 'Nonprofit advising', text: 'Nonprofit advising', value: 'Nonprofit advising' },
  { key: 'Prisoners\' rights', text: 'Prisoners\' rights', value: 'Prisoners\' rights' },
  { key: 'Public benefits', text: 'Public benefits', value: 'Public benefits' },
  { key: 'Real estate', text: 'Real estate', value: 'Real estate' },
  { key: 'Veterans\' advocacy', text: 'Veterans\' advocacy', value: 'Veterans\' advocacy' },
  { key: 'Women\'s rights', text: 'Women\'s rights', value: 'Women\'s rights' }
]
