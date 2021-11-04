import { ChangeEvent } from "react";
import { useTodos } from "../Hooks/useTodos";

export const TodoAdd = () => {
	const { setNewTodo, validateNewTodo, showError } = useTodos();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(event.target.value);
	};

	return (
		<div className="row mt-5">
			<div className="col-10">
				<input
					type="text"
					className="form-control"
					id="inputPassword2"
					placeholder="Add description of todo"
					onChange={handleChange}
				/>
			</div>

			<div className="col-2 text-end">
				<button type="button" className="btn btn-primary mb-3" onClick={validateNewTodo}>
					AddTodo
				</button>
			</div>

			{showError && (
				<div className="col-12 bg-danger text-white text-italic text-center p-2">
					Ingresa un Todo valido
				</div>
			)}
		</div>
	);
};
