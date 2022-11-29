export interface ITodo {
  id: number,
  text: string,
  isCompleted: boolean
}

export interface ITodoComponent {
  todo: ITodo,
  onHandleCompleteTodo: (id: number) => void,
  onHandleDeleteTodo: (id: number) => void
}