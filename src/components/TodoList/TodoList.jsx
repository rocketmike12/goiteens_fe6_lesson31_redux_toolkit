import { useDispatch, useSelector } from "react-redux";

import { toggleFilter } from "../../redux/actions";

import { Todo } from "./Todo";

export const TodoList = function () {
	const dispatch = useDispatch();

	const filter = useSelector((state) => state.filter);
	const tasks = useSelector((state) => state.tasks.filter((task) => !(task.completed && state.filter)));

	const handleFilter = () => {
		dispatch(toggleFilter());
	};

	return (
		<>
			<div>
				<p>show completed</p>
				<input type="checkbox" defaultChecked={filter} onChange={handleFilter} />
			</div>

			<ul>
				{tasks.map((task) => (
					<Todo {...task} key={task.id} />
				))}
			</ul>
		</>
	);
};
