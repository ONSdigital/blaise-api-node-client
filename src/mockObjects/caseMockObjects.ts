import { CaseEditInformation, CaseResponse, CaseStatus } from '../interfaces/case';

export const CaseStatusListMockObject:CaseStatus[] = [{
  primaryKey: '1',
  outcome: 110,
}, {
  primaryKey: '2',
  outcome: 310,
}, {
  primaryKey: '3',
  outcome: 0,
}];

export const CaseResponseMockObject:CaseResponse = {
  caseId: '1',
  fieldData: {
    'qiD.Serial_Number': '1',
    'qDataBag.Prem1': 'Flat 1',
    'qDataBag.Prem2': 'Richmond House',
    'qDataBag.Prem3': 'Rice Road',
    'qDataBag.Prem4': '',
    'qDataBag.District': 'Gwent',
    'qDataBag.PostTown': 'Newport',
    'qDataBag.PostCode': 'NZ11 4PD',
    'qhAdmin.HOut': '100',
    'qhAdmin.Interviewer[1]': 'rich',
    'dmName[1]': 'Richmond Ricecake',
    'dmDteOfBth[1]': '1980-01-15',
    'dmName[2]': 'Richmond Junior',
    'dmDteOfBth[2]': '2005-04-12',
    dmhSize: '2',
  },
};

export const CaseEditInformationListMockObject:CaseEditInformation[] = [
  {
    primaryKey: '100101',
    outcome: 110,
    assignedTo: 'Rich',
    interviewer: 'Jane Doe',
    editedStatus: 3,
    organisation: 1,
    editUrl: '',
    readOnlyUrl: '',
  },
  {
    primaryKey: '100102',
    outcome: 210,
    assignedTo: 'Jake',
    interviewer: 'Bob Roberts',
    editedStatus: 3,
    organisation: 1,
    editUrl: '',
    readOnlyUrl: '',
  },
  {
    primaryKey: '100113',
    outcome: 430,
    assignedTo: 'Jamie',
    interviewer: 'Frank Frankinson',
    editedStatus: 3,
    organisation: 1,
    editUrl: '',
    readOnlyUrl: '',
  },
];
