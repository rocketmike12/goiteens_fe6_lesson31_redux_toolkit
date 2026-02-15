import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleCompleted } from "./actions";

import { nanoid } from "nanoid";

const tasksInitialState = [
	{ id: nanoid(), text: "learn classic redux", completed: true },
	{ id: nanoid(), text: "learn  redux toolkit", completed: false },
	{ id: nanoid(), text: "learn redux toolkit x2", completed: false }
];

// export const tasksReducer = (state = tasksInitialState, action) => {
// 	switch (action.type) {
// 		case addTask.type:
// 			return [...state, action.payload];
// 		case deleteTask.type:
// 			return state.filter((task) => task.id !== action.payload);
// 		case toggleCompleted.type:
// 			return state.map((task) => {
// 				if (task.id !== action.payload) {
// 					return task;
// 				}
// 				return { ...task, completed: !task.completed };
// 			});
// 		default:
// 			return state;
// 	}
// };

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
	builder.addCase(addTask, (state, action) => [...state, action.payload]);
	builder.addCase(deleteTask, (state, action) => state.filter((task) => task.id !== action.payload));
	builder.addCase(toggleCompleted, (state, action) =>
		state.map((task) => {
			if (task.id !== action.payload) {
				return task;
			}
			return { ...task, completed: !task.completed };
		})
	);
});
