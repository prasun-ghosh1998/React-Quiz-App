import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../store/slice/quiz.slice";
import notificationReducer from "../store/slice/notification.slice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;