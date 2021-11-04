import { ITodo, ITodoState } from "../Interfaces";
import { Todocontext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";
import { useReducer, useState } from "react";

const INITIAL_STATE: ITodoState = {
	todosCount: 2,
	todosList: [
		{
			id: "1",
			description: "Hacer curso para sacar la licencia de conducir",
			completed: false,
		},
		{
			id: "2",
			description: "Comprar la moto de mis sueños Kawasaki Z1000",
			completed: false,
		},
	],
	todoCompleted: 0,
	todoPending: 2,
};

interface IProviderProps {
	children: JSX.Element | JSX.Element[];
}

export default function TodoProvider({ children }: IProviderProps) {
	const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);
	const [newTodo, setNewTodo] = useState("");
	const [showError, setShowError] = useState(false);

	const addTodo = (newTodo: string, id: string) => {
		dispatch({
			type: "AddTodo",
			payload: {
				completed: false,
				description: newTodo,
				id,
			},
		});
	};

	const toggleTodo = (id: string) => {
		dispatch({ type: "ToggleTodo", payload: { id } });
	};

	const DeleteTodo = (id: string) => {
		dispatch({ type: "DeleteTodo", payload: { id } });
	};

	const getNewId = () => {
		const currentId =
			parseInt(todoState.todosList[todoState.todosList.length - 1].id) + 1;
		return currentId.toString();
	};

	const validateNewTodo = () => {
		if (newTodo.trim() !== "") {
			addTodo(newTodo, getNewId());
			setShowError(false);
		} else {
			setShowError(true);
		}
	};

	return (
		<Todocontext.Provider
			value={{
				todoState,
				showError,
				toggleTodo,
				DeleteTodo,
				addTodo,
				setNewTodo,
				validateNewTodo,
			}}
		>
			{children}
		</Todocontext.Provider>
	);
}
