
import { CalcToolState } from '../models/calcTool';

export const resultSelector = (state: CalcToolState) => {

  return state.history.reduce( (result, currentEntry) => {

    switch (currentEntry.name) {
      case '+':
        return result + currentEntry.value;
      case '-':
        return result - currentEntry.value;
      case '*':
        return result * currentEntry.value;
      case '/':
        return result / currentEntry.value;
    }

    return result;

  }, 0 /* initial value of result */);

}