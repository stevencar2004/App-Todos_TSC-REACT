import { ITodoItemProps } from "../Interfaces";
import { useTodos } from "../Hooks/useTodos";

export default function TodoItem({ todo }: ITodoItemProps) {
	const { toggleTodo, DeleteTodo } = useTodos();
	const { completed, description, id } = todo;

	return (
		<li className="row">
			<div className="col-10">
				<h5 className={`fw-normal ${completed && "text-success"}`}>
					{id + " - " + description}
				</h5>
			</div>

			<div className="col-2">
				<div className="row">
					<div className="form-check form-switch col-6">
						<input
							className={`form-check-input  ${completed ? "bg-success" : "bg-gray"}`}
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault"
							onClick={() => toggleTodo(id)}
							style={{ cursor: "pointer" }}
						/>
					</div>
					<div className="col-6">
						<i
							className=" text-danger fas fa-trash-alt"
							style={{ cursor: "pointer" }}
							onClick={() => {
								DeleteTodo(id);
							}}
						></i>
					</div>
				</div>
			</div>
		</li>
	);
}
