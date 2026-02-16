import { useDispatch, useSelector } from "react-redux";

import { deleteTask, toggleCompleted } from "../../redux/actions";

import styles from "./TodoList.module.scss";

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
			<li className={styles["task-list__item"]}>
				<div className={styles["task-list__wrap"]}>
					<input type="checkbox" defaultChecked={completed} onChange={handleComplete} className={styles["task-list__checkbox"]} />
					<p className={styles["task-list__text"]}>{text}</p>
				</div>
				<button onClick={handleDelete} className={styles["task-list__delete"]}>
					del
				</button>
			</li>
		</>
	);
};
