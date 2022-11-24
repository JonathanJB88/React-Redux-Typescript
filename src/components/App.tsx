import { useState } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import { TodoList } from './TodoList';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

const _App = (
  { todos, fetchTodos, deleteTodo }: AppProps,
  { fetching }: AppState
): JSX.Element => {
  const [isLoading, setIsLoading] = useState<AppState>({ fetching: false });

  const onButtonClick = (): void => {
    setIsLoading({ fetching: true });
    fetchTodos();
    setIsLoading({ fetching: false });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      <hr />
      {isLoading.fetching ? (
        <h1>Loading...</h1>
      ) : (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      )}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
