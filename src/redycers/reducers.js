import actionTypes from "../actions/actions-types";

export function bar(state = {}, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.UPDATE_BAR_DATA:
      newState.barData = action.payload;
      return newState;
    default:
      return state;
  }
}

export function line(state = {}, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.UPDATE_BAR_DATA:
      newState.barData = action.payload;
      return newState;
    default:
      return state;
  }
}

export function spiral(state = {}, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.UPDATE_BAR_DATA:
      newState.barData = action.payload;
      return newState;
    default:
      return state;
  }
}
