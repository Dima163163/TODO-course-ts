import { useAppSelector } from '../../hooks';
import {Todo} from './Todo/Todo';


interface ITodo {
  id: string,
  title: string,
  isCompleted: boolean,
}

export const Table = () => {
  const {todos} = useAppSelector(state => state.todos)
  return (
    <div className="table-wrapper">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {todos.length !== 0 && (todos.map((todo: ITodo, i) => 
            <Todo key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} number={i + 1}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}