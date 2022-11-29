import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useEffect } from "react";
import { ITodoComponent } from "../utils/schemas";
import styles from "./Todo.module.css";

export const Todo = ({ todo, onHandleCompleteTodo, onHandleDeleteTodo }: ITodoComponent) => {
  
  return (
    <div className={styles.todo}>
      <div className={styles.content}>
        <div className="check" onClick={() => onHandleCompleteTodo(todo.id)}>
          {todo?.isCompleted ?
            <CheckCircle size={16} weight="fill" className={styles.check} />
            :
            <Circle className={styles.icon} size={16} />
          }
        </div>
        <p>{todo?.text}</p>
      </div>
      <div onClick={() => onHandleDeleteTodo(todo.id)}>
        <Trash size={16} className={styles.delete} />
      </div>
    </div>
  )
}