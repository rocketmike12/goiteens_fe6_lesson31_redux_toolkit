import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { TodoList } from "./components/TodoList/TodoList";

export const App = function () {
	return (
		<>
			<TodoEditor />
			<TodoList />
		</>
	);
};
