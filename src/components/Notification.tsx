import { Snackbar, Alert } from "@mui/material";
import { removeNotification } from "../store/slice/notification.slice";
import { useAppDispatch, useAppSelector } from "../service/helper/redux";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.notification);

  return (
    <>
      {notifications.map((n) => (
        <Snackbar
          key={n.id}
          open
          autoHideDuration={3000}
          onClose={() => dispatch(removeNotification(n.id))}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={n.type}
            onClose={() => dispatch(removeNotification(n.id))}
          >
            {n.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};

export default Notification;