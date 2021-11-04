export interface ITodo {
	id: string;
	description: string;
	completed: boolean;
}

export interface ITodoState {
	todosCount: number;
	todosList: ITodo[];
	todoCompleted: number;
	todoPending: number;
}

export interface ITodoItemProps {
	todo: ITodo;
}

// TYPES
export type TTodosActions =
	| { type: "AddTodo"; payload: ITodo }
	| { type: "ToggleTodo"; payload: { id: string } }
	| { type: "DeleteTodo"; payload: { id: string } };

export type TTodoContextProps = {
	todoState: ITodoState;
	showError: boolean;
	toggleTodo: (id: string) => void;
	DeleteTodo: (id: string) => void;
	addTodo: (newTodo: string, id: string) => void;
	setNewTodo: (value: string) => void;
	validateNewTodo: () => void;
};
