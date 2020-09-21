
export type CalcHistoryEntry = {
  name: string,
  value: number,
};

// state data
export type CalcToolState = {
  history: CalcHistoryEntry[],
  validationMessage: string,
};
