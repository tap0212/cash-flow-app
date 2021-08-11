export type NoteCount = {
  currency: number;
  number: number;
};
export const countNotes = (amount: number): NoteCount[] => {
  const currencies = [2000, 500, 100, 20, 10, 5, 1];
  const notesCounter = Array(currencies.length).fill(0);
  const result: NoteCount[] = [];
  currencies.forEach((_note, i) => {
    if (amount >= currencies[i]) {
      notesCounter[i] = Math.floor(amount / currencies[i]);
      amount = amount - notesCounter[i] * currencies[i];
    }
  });
  currencies.forEach((_note, i) => {
    result.push({
      currency: currencies[i],
      number: notesCounter[i],
    });
  });
  return result;
};
