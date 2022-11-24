import { Todo } from '../actions';
import { Action, ActionType } from '../interfaces/Action';

export const todosReducer = (
  state: Todo[] = [],
  action: Action<ActionType, Todo>
) => {
  switch (action.type) {
    case ActionType.FETCH:
      return action.payload;
    case ActionType.DELETE:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
