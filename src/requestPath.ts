export const encodePathSegment = (value: string): string => encodeURIComponent(value);

export const getServerParkQuestionnairesPath = (serverPark: string): string =>
  `api/v2/serverparks/${encodePathSegment(serverPark)}/questionnaires`;

export const getServerParkQuestionnairePath = (
  serverPark: string,
  questionnaireName: string,
): string =>
  `${getServerParkQuestionnairesPath(serverPark)}/${encodePathSegment(questionnaireName)}`;

export const getCatiServerParkQuestionnairesPath = (serverPark: string): string =>
  `api/v2/cati/serverparks/${encodePathSegment(serverPark)}/questionnaires`;

export const getCatiServerParkQuestionnairePath = (
  serverPark: string,
  questionnaireName: string,
): string =>
  `${getCatiServerParkQuestionnairesPath(serverPark)}/${encodePathSegment(questionnaireName)}`;

export const buildRepeatedQueryString = (
  parameterName: string,
  values: Iterable<string>,
): string => {
  const queryParams = new URLSearchParams();

  for (const value of values) {
    queryParams.append(parameterName, value);
  }

  return queryParams.toString();
};
