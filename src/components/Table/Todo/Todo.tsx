import { useAppDispatch } from "../../../hooks";
import { removeTodo, toggleTodoCompleted } from '../../../store/todosSlice';

interface TodoItemProps {
  id: string,
  title: string,
  isCompleted: boolean,
  number: number,
}

export const Todo: React.FC<TodoItemProps> = ({id, title, isCompleted, number}) => {
  const dispatch = useAppDispatch();
  const completed = isCompleted ? "Выполнена" : "В процессе";
  const style = isCompleted ? "table-success" : "table-light";

  const removeTodoItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeTodo(id))
  }
  const toggleTodoItem = (e: React.MouseEvent): void => {
    dispatch(toggleTodoCompleted(id))
  }
  return (
    <tr className={style}>
      <td style={{display: "none"}}>{id}</td>
      <td>{number}</td>
      <td className="task">
        {title}
      </td>
      <td>{completed}</td>
      <td>
        <button className="btn btn-danger" onClick={
          (e) => removeTodoItem(e)
          }>
          Удалить
        </button>
        <button className="btn btn-success" onClick={(e) => toggleTodoItem(e)}>
          Завершить
        </button>
      </td>
    </tr>
  )
}