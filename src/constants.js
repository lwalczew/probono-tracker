export const startData = [
  {
    id: 1,
    firstName: 'Erin',
    lastName: 'Walczewski',
    office: 'Boston',
    level: 'Associate',
    attorneyStartYear: '2010',
    cooleyStartYear: '2010',
    practiceGroup: 'Venture Capital',
    competencies: ['Low-income entrepreneurs', 'Criminal Defense', 'Immigration'],
    inSearchOf: ['Immigration'],
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
    id: 2,
    firstName: 'Karen',
    lastName: 'Burhans',
    office: 'San Francisco',
    level: 'Associate',
    attorneyStartYear: '2010',
    cooleyStartYear: '2010',
    practiceGroup: 'Business Litigation',
    competencies: ['Immigration', 'Civil Defense', 'Education'],
    inSearchOf: ['Immigration', 'Education'],
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
    id: 3,
    firstName: 'Mark',
    lastName: 'Pitchford',
    office: 'Palo Alto',
    level: 'Partner',
    attorneyStartYear: '1981',
    cooleyStartYear: '1981',
    practiceGroup: 'General Corporate',
    competencies: ['Immigration', 'Civil Defense', 'Education'],
    inSearchOf: ['Immigration', 'Education'],
    projects: []
  },
  {
    id: 4,
    firstName: 'Joe',
    lastName: 'Conroy',
    office: 'Reston',
    level: 'Partner',
    attorneyStartYear: '1981',
    cooleyStartYear: '1981',
    practiceGroup: 'General Corporate',
    competencies: ['Management'],
    inSearchOf: ['Management'],
    projects: []
  }
];

export const attorneyModalData = {
  
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
  {key: 'immigration', text: 'Immigration', value: 'Immigration'},
  {key: 'education', text: 'Education', value: 'Education'}
]