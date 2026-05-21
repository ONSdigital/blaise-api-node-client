export interface QuestionnaireNode {
  readonly nodeName: string;
  readonly nodeStatus: string;
}

export interface Questionnaire {
  readonly installDate: string;
  readonly name: string;
  readonly expired?: boolean;
  readonly serverParkName: string;
  readonly link?: string;
  readonly fieldPeriod?: string;
  readonly surveyTla?: string;
  readonly dataRecordCount?: number;
  readonly status?: string;
  readonly hasData?: boolean;
  readonly nodes?: readonly QuestionnaireNode[];
  readonly blaiseVersion?: string;
}

export interface InstallQuestionnaire {
  readonly questionnaireFile: string;
}

export interface InstallQuestionnaireResponse {
  readonly questionnaireFile: string;
}

export interface QuestionnaireSettings {
  readonly type: string;
  readonly saveSessionOnTimeout: boolean;
  readonly saveSessionOnQuit: boolean;
  readonly deleteSessionOnTimeout: boolean;
  readonly deleteSessionOnQuit: boolean;
  readonly sessionTimeout: number;
  readonly applyRecordLocking: boolean;
}
