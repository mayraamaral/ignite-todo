import { useState, FormEvent, useEffect } from "react";
import { Todo } from "./Todo";
import styles from "./TodoContainer.module.css";
import { ITodo } from "../utils/schemas";
import { PlusCircle } from "phosphor-react";
import { NoTodos } from "./NoTodos";

export const TodoContainer = () => {
  
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [newTodoText, setNewTodoText] = useState('');

  const handleCreateTodo = (e: FormEvent) => {
    e.preventDefault();
      
    setTodoList([...todoList, {
      id: todoList.length,
      text: newTodoText,
      isCompleted: false
    }]);
    setNewTodoText('');

    console.log(todoList);
    
  }

  const handleToggleCompleteTodo = (id: number) => {
    const newTodoList = todoList.map(item => {
      if (item.id === id) {
        return {...item, isCompleted: !item.isCompleted };
      } else {
        return item;
      }
    });

    setTodoList(newTodoList);
    
    console.log(todoList)
  }

  const handleDeleteTodo = (id: number) => {
    const newTodoList = todoList.filter(item => {
      return item.id !== id
    })
    setTodoList(newTodoList);
  }

  useEffect(() => {
    const completedTodos = todoList.filter(item => item.isCompleted)
    setCompletedCount(completedTodos.length);
  }, [todoList])
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateTodo}>
        <input className={styles.todoInput} type="text" value={newTodoText} placeholder="Adicione uma nova tarefa" onChange={e => setNewTodoText(e.target.value)} />
        <button type="submit">Criar <PlusCircle /></button>
      </form>
      <header>
        <div className={styles.tarefasCriadas}>
          Tarefas criadas
          <span className={styles.completeCount}>{todoList.length}</span>
        </div>
        <div className={styles.tarefasConcluidas}>
          <span className={todoList.length > 0 ? styles.tarefasConcluidas : styles.tarefasConcluidasSemNenhumTodo}>Concluídas</span>
          <span className={styles.completeCount}>{completedCount} de {todoList.length}</span>
        </div>
      </header>
      <div className={styles.todoList}>
        {todoList.length > 0 ? 
          todoList.map(item => { return <Todo key={item.id} todo={item} onHandleCompleteTodo={handleToggleCompleteTodo} onHandleDeleteTodo={handleDeleteTodo} /> }) 
          : 
          <NoTodos />}
      </div>
    </div>
  )
}