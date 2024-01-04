import BlaiseApiClient from '../blaiseApiClient';
import {
  InstallQuestionnaire, InstallQuestionnaireResponse, Questionnaire, QuestionnaireSettings,
} from '../interfaces/questionnaire';

export async function getAllQuestionnairesWithCatiData(this: BlaiseApiClient): Promise<Questionnaire[]> {
  return this.get('/api/v2/cati/questionnaires');
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
