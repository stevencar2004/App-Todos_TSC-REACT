import { useTodos } from "../Hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const { todos } = useTodos();

	return (
		<ul className="mt-5">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
}
