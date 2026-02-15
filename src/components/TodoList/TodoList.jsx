import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const TodoList = function () {
	const tasks = useSelector((state) => state.tasks);

	return (
		<>
			<ul>
				{tasks.map((task) => (
					<Todo {...task} key={task.id} />
				))}
			</ul>
		</>
	);
};
