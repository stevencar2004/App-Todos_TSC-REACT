import TodoProvider from "../Context/TodoProvider";
import { TodoAdd } from "./TodoAdd";
import { TodoInfo } from "./TodoInfo";
import TodoList from "./TodoList";

export const TodoComp = () => {
	return (
		<TodoProvider>
			<TodoAdd />
			<TodoInfo />
			<TodoList />
		</TodoProvider>
	);
};
