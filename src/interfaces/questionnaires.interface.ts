interface IQuestionnaire {
    installDate: string
    name: string
    expired?: boolean
    serverParkName: string
    activeToday?: boolean // deprecated
    surveyDays?: string[] // deprecated
    link?: string
    fieldPeriod?: string
    surveyTLA?: string
    dataRecordCount?: number
    status?: string
    hasData?: boolean
    nodes?: INode[]
    active?: boolean //deprecated
    blaiseVersion?: string
}

interface INode {
    nodeName: string;
    nodeStatus: string;
}

interface IInstallQuestionnaire {
    questionnaireFile: string
}

interface IInstallQuestionnaireResponse {
    questionnaireFile: string
}

interface IQuestionnaireSettings {
    type: string
    saveSessionOnTimeout: boolean
    saveSessionOnQuit: boolean
    deleteSessionOnTimeout: boolean
    deleteSessionOnQuit: boolean
    sessionTimeout: number
    applyRecordLocking: boolean
}

interface IDaybatchResponse {
    dayBatchDate: string
    caseIds: string[]
}

interface IDaybatchSettings {
    dayBatchDate: string
    checkForTreatedCases: boolean
}

type ISurveyDays = string[] | Date[]

export type {
    IQuestionnaire,
    IInstallQuestionnaire,
    IInstallQuestionnaireResponse,
    IQuestionnaireSettings,
    IDaybatchResponse,
    IDaybatchSettings,
    ISurveyDays,
};
