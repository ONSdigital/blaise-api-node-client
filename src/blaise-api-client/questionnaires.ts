import BlaiseApiClient from "../blaise-api-client";
import { DaybatchResponse, DaybatchSettings, InstallQuestionnaire, InstallQuestionnaireResponse, Questionnaire, QuestionnaireSettings, SurveyDays } from "../interfaces/questionnaires";

export async function getAllQuestionnairesWithCatiData(this: BlaiseApiClient): Promise<Questionnaire[]> {
  return this.get("/api/v2/cati/questionnaires");
}

export async function getQuestionnairesWithCatiData(this: BlaiseApiClient, serverpark: string): Promise<Questionnaire[]> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires`);
}

export async function getQuestionnaireWithCatiData(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<Questionnaire> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}`);
}

export async function getQuestionnaires(this: BlaiseApiClient, serverpark: string): Promise<Questionnaire[]> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires`);
}

export async function questionnaireExists(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<boolean> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/exists`);
}

export async function doesQuestionnaireHaveMode(this: BlaiseApiClient, serverpark: string, questionnaireName: string, mode: string): Promise<boolean> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/modes/${mode}`);
}

export async function getQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<Questionnaire> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}`);
}

export async function installQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaire: InstallQuestionnaire): Promise<InstallQuestionnaireResponse> {
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

export async function getQuestionnaireSettings(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<QuestionnaireSettings[]> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/settings`);
}

export async function activateQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<null> {
  return this.patch(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/activate`);
}

export async function deactivateQuestionnaire(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<null> {
  return this.patch(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/deactivate`);
}

export async function getDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<DaybatchResponse> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`);
}

export async function addDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string, daybatchSettings: DaybatchSettings): Promise<DaybatchResponse> {
  return this.post(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`, daybatchSettings);
}

export async function getSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<string[]> {
  return this.get(`api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`);
}

export async function addSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string, surveyDays: SurveyDays): Promise<string[]> {
  surveyDays = surveyDays.map((surveyDay: string | Date) => {
    if (surveyDay instanceof Date) {
      return surveyDay.toISOString();
    }
    return surveyDay;
  });
  return this.post(`api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`, surveyDays);
}
