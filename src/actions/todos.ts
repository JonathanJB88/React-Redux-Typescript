import axios from 'axios';
import { Dispatch } from 'redux';
import { Action, ActionType, ID } from '../interfaces/Action';
import { Entity } from '../interfaces/Entity';

export interface Todo extends Entity {
  title: string;
  completed: boolean;
}

export type FetchTodosAction = Action<ActionType.FETCH, Todo, Todo[]>;

export type DeleteTodoAction = Action<ActionType.DELETE, Todo, number>;

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionType.FETCH,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: ID<Todo>): DeleteTodoAction => {
  return {
    type: ActionType.DELETE,
    payload: id,
  };
};
