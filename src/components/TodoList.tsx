import { Todo } from '../actions';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

export const TodoList = ({ todos, deleteTodo }: TodoListProps): JSX.Element => {
  const onTodoClick = (id: number): void => {
    deleteTodo(id);
  };
  return (
    <>
      {todos?.map(
        ({ id, title }: Todo): JSX.Element => (
          <div key={id}>
            <span style={{ cursor: 'pointer' }} onClick={() => onTodoClick(id)}>
              {title}
            </span>
          </div>
        )
      )}
    </>
  );
};
