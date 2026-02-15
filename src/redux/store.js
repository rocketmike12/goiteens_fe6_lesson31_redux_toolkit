import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, tasksReducer } from "./reducer";

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filter: filterReducer
	}
});
