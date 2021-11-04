import { Todocontext } from "../Context/TodoContext";
import { useContext } from "react";

export const useTodos = () => {
	const {
		todoState,
		toggleTodo,
		DeleteTodo,
		addTodo,
		setNewTodo,
		validateNewTodo,
		showError,
	} = useContext(Todocontext);

	const { todosList } = todoState;

	return {
		todos: todosList,
		todosPending: todosList.filter((todo) => !todo.completed).length,
		todosCompleted: todosList.filter((todo) => todo.completed).length,
		toggleTodo,
		DeleteTodo,
		addTodo,
		setNewTodo,
		validateNewTodo,
		showError,
	};
};
