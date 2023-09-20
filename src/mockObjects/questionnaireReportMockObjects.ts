import {QuestionnaireReport} from "../interfaces/questionnaireReport";

export const reportMockObject: QuestionnaireReport = {
    questionnaireName: "FRS2211A",
    questionnaireId: "00000000-0000-0000-0000-000000000000",
    reportingData: [
      {
        "qiD.Serial_Number": "1",
        "qhAdmin.HOut": "210",        
      },
      {
        "qiD.Serial_Number": "2",
        "qhAdmin.HOut": "110",        
      },
    ]
  };