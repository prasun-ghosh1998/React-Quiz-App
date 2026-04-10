import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";

type Notification = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

type State = {
  notifications: Notification[];
};

const initialState: State = {
  notifications: [],
};

let id = 0;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, "id">>) => {
      state.notifications.push({ id: id++, ...action.payload });
    },

    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },

    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  addNotification,
  removeNotification,
  clearNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;