import React, { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { Modal } from './components/Modal/Modal';
import { useAppDispatch, useAppSelector } from './hooks';
import { getTodos } from './store/todosSlice';

function App() {
  const {name} = useAppSelector(state => state.todos);
  const [isOpen , setIsOpen] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos(name))
  }, [name, dispatch])

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className="App">
        <h3>Todo App</h3>
        <Form/>
        <Table/>
      </div>
      {isOpen && <Modal closeModal={closeModal}/>}
    </>
  );
}

export default App;
