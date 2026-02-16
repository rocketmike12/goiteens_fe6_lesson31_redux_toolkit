import { useDispatch, useSelector } from "react-redux";

import { toggleFilter } from "../../redux/actions";

import { Todo } from "./Todo";

import styles from "./TodoList.module.scss";

export const TodoList = function () {
	const dispatch = useDispatch();

	const filter = useSelector((state) => state.filter);
	const tasks = useSelector((state) => state.tasks.filter((task) => !(task.completed && state.filter)));

	const handleFilter = () => {
		dispatch(toggleFilter());
	};

	return (
		<>
			<div className={styles["container"]}>
				<div className={styles["filter"]}>
					<p className={styles["filter__text"]}>hide completed</p>
					<div className={styles["filter__checkbox"]}>
						<input type="checkbox" checked={filter} onChange={handleFilter} className={styles["filter__checkbox__input"]} />
						<span className={styles["filter__checkbox__checkmark"]}></span>
					</div>
				</div>

				<ul className={styles["task-list"]}>
					{tasks.map((task) => (
						<Todo {...task} key={task.id} />
					))}
				</ul>
			</div>
		</>
	);
};
