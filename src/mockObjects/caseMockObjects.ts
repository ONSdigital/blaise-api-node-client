import { CaseResponse, CaseStatus } from "../interfaces/case";

export const CaseStatusListMockObject:CaseStatus[] = [{
    "primaryKey": "1",
    "outcome": 110
}, {
    "primaryKey": "2",
    "outcome": 310
}, {
    "primaryKey": "3",
    "outcome": 0
}];

export const CaseResponseMockObject:CaseResponse = {
    "caseId": "1",
    "caseData": {
        "qiD.Serial_Number": "900001",
        "qDataBag.Prem1": "Flat 1",
        "qDataBag.Prem2": "Richmond House",
        "qDataBag.Prem3": "Rice Road",
        "qDataBag.Prem4": "",
        "qDataBag.District": "Gwent",
        "qDataBag.PostTown": "Newport",
        "qDataBag.PostCode": "NZ11 4PD",
        "qhAdmin.HOut": "100",
        "qhAdmin.Interviewer[1]": "rich",
        "dmName[1]": "Richomd Ricecake",
        "dmDteOfBth[1]": "1980-01-15",
        "qHousehold.QHHold.PerCount": "2",
    }
};
