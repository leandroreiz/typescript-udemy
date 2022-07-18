import './TodoList.css';

interface TodoListProps {
  items: Array<{ id: string; text: string }>;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteTodo.bind(null, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
