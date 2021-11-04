import { useTodos } from "../Hooks/useTodos";

export const TodoInfo = () => {
	const { todosCompleted, todosPending } = useTodos();
	return (
		<div className="row mt-3">
			<h4 className="text-success col-6 text-center">Completed {todosCompleted}</h4>
			<h4 className="text-danger col-6 text-center">Pending {todosPending}</h4>
		</div>
	);
};
