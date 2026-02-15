import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

export const TodoEditor = function () {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		const task = form.elements.task.value;

		dispatch(addTask(task));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="task" placeholder="task" />
				<button type="submit">add</button>
			</form>
		</>
	);
};
