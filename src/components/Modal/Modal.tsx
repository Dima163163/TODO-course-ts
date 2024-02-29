import { useState } from 'react';
import style from './Modal.module.css';
import { useAppDispatch } from '../../hooks';
import { loginUser } from '../../store/todosSlice';

type Props = {
  closeModal: () => void  
} 

export const Modal = ({closeModal}: Props) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(name);
    dispatch(loginUser(name));
    closeModal();
  }

  const handleInputChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setName(e.target.value)
    }
  }

  return (
    <div className={style.overlay}>
    <form className={style.form} onSubmit={handleFormSubmit}>
      <h2>Введите ваше имя</h2>
      <input type="text" onChange={(e) => handleInputChange(e)} value={name}/>
      <button type='submit'>Авторизация</button>
    </form>
    </div>
  )
}