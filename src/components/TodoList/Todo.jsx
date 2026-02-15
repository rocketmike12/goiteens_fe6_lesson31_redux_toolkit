import { useDispatch, useSelector } from "react-redux";

import { deleteTask, toggleCompleted } from "../../redux/actions";

export const Todo = function ({ id, text, completed }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTask(id));
	};

	const handleComplete = () => {
		dispatch(toggleCompleted(id));
	};

	return (
		<>
			<li>
				<p>{text}</p>
				<input type="checkbox" defaultChecked={completed} onChange={handleComplete} />
				<button onClick={handleDelete}>del</button>
			</li>
		</>
	);
};
