import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TodoContainer } from "./components/TodoContainer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;
