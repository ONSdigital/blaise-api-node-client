const Organisation = {
  ONS: 1,
  NatCen: 2,
  Nisra: 3,
} as const;

export type Organisation = (typeof Organisation)[keyof typeof Organisation];

export { Organisation };
