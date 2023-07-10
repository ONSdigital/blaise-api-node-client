import BlaiseApiClient from "../blaise-api-client";
import { IDaybatchResponse, IDaybatchSettings, IInstallQuestionnaire, IInstallQuestionnaireResponse, IQuestionnaire, IQuestionnaireSettings, ISurveyDays } from "../interfaces/questionnaires.interface";

export async function getAllQuestionnairesWithCatiData(this: BlaiseApiClient): Promise<IQuestionnaire[]> {
  return this.get("/api/v2/cati/questionnaires");
}

export async function getQuestionnairesWithCatiData(this: BlaiseApiClient, serverpark: string): Promise<IQuestionnaire[]> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires`);
}

export async function getQuestionnaireWithCatiData(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<IQuestionnaire> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}`);
}

export async function getQuestionnaires(this: BlaiseApiClient, serverpark: string): Promise<IQuestionnaire[]> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires`);
}

export async function questionnaireExists(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<boolean> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/exists`);
}

export async function doesQuestionnaireHaveMode(this: BlaiseApiClient, serverpark: string, questionnaireName: string, mode: string): Promise<boolean> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/modes/${mode}`);
}

export async function getQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<IQuestionnaire> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}`);
}

export async function installQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaire: IInstallQuestionnaire): Promise<IInstallQuestionnaireResponse> {
  return this.post(`/api/v2/serverparks/${serverpark}/questionnaires`, questionnaire);
}

export async function deleteQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<null> {
  return this.delete(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}?name=${questionnaireName}`);
}

export async function getQuestionnaireCaseIds(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<string[]> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/ids`);
}

export async function getQuestionnaireModes(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<string[]> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/modes`);
}

export async function getQuestionnaireSettings(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<IQuestionnaireSettings[]> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/settings`);
}

export async function activateQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<null> {
  return this.patch(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/activate`);
}

export async function deactivateQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<null> {
  return this.patch(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/deactivate`);
}

export async function getDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<IDaybatchResponse> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`);
}

export async function addDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string, daybatchSettings: IDaybatchSettings): Promise<IDaybatchResponse> {
  return this.post(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`, daybatchSettings);
}

export async function getSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<string[]> {
  return this.get(`api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`);
}

export async function addSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string, surveyDays: ISurveyDays): Promise<string[]> {
  surveyDays = surveyDays.map((surveyDay: string | Date) => {
    if (surveyDay instanceof Date) {
      return surveyDay.toISOString();
    }
    return surveyDay;
  });
  return this.post(`api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`, surveyDays);
}
