import { ITodoState, TTodosActions } from "../Interfaces";

export const TodoReducer = (state: ITodoState, action: TTodosActions): ITodoState => {
	switch (action.type) {
		case "AddTodo":
			return { ...state, todosList: [...state.todosList, action.payload] };

		case "ToggleTodo":
			return {
				...state,
				todosList: state.todosList.map(({ ...todo }) => {
					if (todo.id === action.payload.id) {
						todo.completed = !todo.completed;
					}
					return todo;
				}),
			};

		case "DeleteTodo":
			return {
				...state,
				todosList: state.todosList.filter((todo) => todo.id !== action.payload.id),
			};

		default:
			return state;
	}
};
