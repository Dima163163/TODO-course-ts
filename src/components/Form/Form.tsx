import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addTodo, resetTodos } from '../../store/todosSlice';



export const Form = () => {
  const dispatch = useAppDispatch();
  const {name} = useAppSelector(state => state.todos);
  const [titleTodo, setTitleTodo] = useState('');
  const disabled = titleTodo.length ? false : true;

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const todo = {
        id: Math.random().toString(16).substring(2, 10),
        title: titleTodo,
        isCompleted: false,
      }
    dispatch(addTodo(todo));
    setTitleTodo('');
  }

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setTitleTodo(e.target.value);
    }
  }

  const handleReset = () => {
    dispatch(resetTodos(name));
  }
  return (
    <form className="d-flex align-items-center mb-3" onSubmit={handleSubmit}>
      <label className="form-group me-3 mb-0">
        <input type="text" className="form-control" onChange={(e) => handleChange(e)} placeholder="ввести задачу" value={titleTodo}/>
      </label>

      <button type="submit" className="btn btn-primary me-3" disabled={disabled}>
        Сохранить
      </button>

      <button type="reset" className="btn btn-warning" onClick={() => handleReset()}>
        Очистить
      </button>
    </form>
  );
};