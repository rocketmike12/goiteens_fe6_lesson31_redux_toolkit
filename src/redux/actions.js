import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/add", (text) => {
	return {
		payload: {
			text: text,
			id: nanoid(),
			completed: false
		}
	};
});

export const deleteTask = createAction("tasks/delete", (id) => {
	return {
		payload: id
	};
});

export const toggleCompleted = createAction("tasks/toggle", (id) => {
	return {
		payload: id
	};
});

export const toggleFilter = createAction("filter/toggle");
