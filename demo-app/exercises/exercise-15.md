# Exercise 15

1. Display a history of calculator operations below the buttons. For each history entry, record the operation name (+, -, *, /) and the value typed into the input field.

2. Implement a clear button which will change the result to 0 and clear the history.

You may need a way to handle different kinds of actions in the reducer. Here is an example
of a typeguard function which we discussed earlier in the class. Remember, if you use the function
to test a value, it will allow you to use value as the type specified after the is.

```javascript
export function isCalcOpAction(action: Action<string>): action is CalcOpAction {
  return action.type === ADD_ACTION || action.type === SUBTRACT_ACTION;
}
```

3. Ensure it works.