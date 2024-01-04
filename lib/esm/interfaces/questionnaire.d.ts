export interface Node {
    nodeName: string;
    nodeStatus: string;
}
export interface Questionnaire {
    installDate: string;
    name: string;
    expired?: boolean;
    serverParkName: string;
    activeToday?: boolean;
    surveyDays?: string[];
    link?: string;
    fieldPeriod?: string;
    surveyTLA?: string;
    dataRecordCount?: number;
    status?: string;
    hasData?: boolean;
    nodes?: Node[];
    active?: boolean;
    blaiseVersion?: string;
}
export interface InstallQuestionnaire {
    questionnaireFile: string;
}
export interface InstallQuestionnaireResponse {
    questionnaireFile: string;
}
export interface QuestionnaireSettings {
    type: string;
    saveSessionOnTimeout: boolean;
    saveSessionOnQuit: boolean;
    deleteSessionOnTimeout: boolean;
    deleteSessionOnQuit: boolean;
    sessionTimeout: number;
    applyRecordLocking: boolean;
}
