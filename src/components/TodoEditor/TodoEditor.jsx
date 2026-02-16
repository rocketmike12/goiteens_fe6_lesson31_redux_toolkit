import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

import styles from "./TodoEditor.module.scss";

export const TodoEditor = function () {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		const task = form.elements.task.value;

		if (!task.length) return;

		dispatch(addTask(task));
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles["todo-editor"]}>
				<input type="text" name="task" placeholder="task" className={styles["todo-editor__input"]} />
				<button type="submit" className={styles["todo-editor__button"]}>
					add
				</button>
			</form>
		</>
	);
};
