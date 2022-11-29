import clipboard from "../assets/clipboard.png";
import styles from "./NoTodos.module.css";

export const NoTodos = () => {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Sem to-dos!" />
      <strong>Você não tem tarefas cadastradas!</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}