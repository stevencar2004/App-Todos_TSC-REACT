import { TodoComp } from "./index";

export default function App() {
	return (
		<>
			<header>
				<h2 className="m-3 fw-bold text-center">App Todos - REACT + TYPESCRIPT</h2>
			</header>
			<hr className="mb-3" />
			<TodoComp />
		</>
	);
}
