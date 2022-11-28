import { useState } from "react";
import styles from "./TodoContainer.module.css";

export const TodoContainer = () => {
  
  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>Criar</button>
    </div>
  )
}