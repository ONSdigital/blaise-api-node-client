import { CaseEditInformation, CaseResponse, CaseStatus } from "../interfaces/case.js";
import CaseOutcome from "../enums/caseOutcome.js";
import EditedStatus from "../enums/editedStatus.js";
import Organisation from "../enums/organisation.js";

export const CaseStatusListMockObject: CaseStatus[] = [
  {
    primaryKey: "1",
    outcome: CaseOutcome.Completed,
  },
  {
    primaryKey: "2",
    outcome: CaseOutcome.NonContact,
  },
  {
    primaryKey: "3",
    outcome: CaseOutcome.None,
  },
];

export const CaseResponseMockObject: CaseResponse = {
  caseId: "1",
  fieldData: {
    "qiD.Serial_Number": "1",
    "qDataBag.Prem1": "Flat 1",
    "qDataBag.Prem2": "Richmond House",
    "qDataBag.Prem3": "Rice Road",
    "qDataBag.Prem4": "",
    "qDataBag.District": "Gwent",
    "qDataBag.PostTown": "Newport",
    "qDataBag.PostCode": "NZ11 4PD",
    "qhAdmin.HOut": "100",
    "qhAdmin.Interviewer[1]": "rich",
    "dmName[1]": "Richmond Ricecake",
    "dmDteOfBth[1]": "1980-01-15",
    "dmName[2]": "Richmond Junior",
    "dmDteOfBth[2]": "2005-04-12",
    dmhSize: "2",
  },
};

export const CaseEditInformationListMockObject: CaseEditInformation[] = [
  {
    primaryKey: "100101",
    outcome: CaseOutcome.Completed,
    assignedTo: "Rich",
    interviewer: "Jane Doe",
    editedStatus: EditedStatus.Finished,
    organisation: Organisation.ONS,
    editUrl: "",
    readOnlyUrl: "",
  },
  {
    primaryKey: "100102",
    outcome: CaseOutcome.Partial,
    assignedTo: "Jake",
    interviewer: "Bob Roberts",
    editedStatus: EditedStatus.Finished,
    organisation: Organisation.ONS,
    editUrl: "",
    readOnlyUrl: "",
  },
  {
    primaryKey: "100113",
    outcome: CaseOutcome.HQRefusal,
    assignedTo: "Jamie",
    interviewer: "Frank Frankinson",
    editedStatus: EditedStatus.Finished,
    organisation: Organisation.ONS,
    editUrl: "",
    readOnlyUrl: "",
  },
];
