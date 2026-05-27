const EditedStatus = {
  NotStarted: 0,
  Started: 1,
  Query: 2,
  Finished: 3,
} as const;

export type EditedStatus = (typeof EditedStatus)[keyof typeof EditedStatus];

export { EditedStatus };
