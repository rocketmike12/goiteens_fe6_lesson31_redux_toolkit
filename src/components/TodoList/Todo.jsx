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
					<div className={styles["task-list__checkbox"]}>
						<input type="checkbox" checked={completed} onChange={handleComplete} className={styles["task-list__checkbox__input"]} />
						<span className={styles["task-list__checkbox__checkmark"]}></span>
					</div>
					<p className={styles["task-list__text"]}>{text}</p>
				</div>
				<button onClick={handleDelete} className={styles["task-list__delete"]}>
					del
				</button>
			</li>
		</>
	);
};
