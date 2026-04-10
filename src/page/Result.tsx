import { useEffect } from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../service/helper/redux";
import { addNotification } from "../store/slice/notification.slice";
import { resetQuiz } from "../store/slice/quiz.slice";

const Result = () => {
  const dispatch = useAppDispatch();
  const { score, questions } = useAppSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(
      addNotification({
        message: "Quiz Completed 🎉",
        type: "info",
      })
    );
  }, [dispatch]);

  return (
    <Card sx={{ maxWidth: 500, m: "auto", mt: 5, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h4">Quiz Completed </Typography>

        <Typography sx={{mt:2}}>
          Score: {score} / {questions.length}
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => dispatch(resetQuiz())}
        >
          Restart Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default Result;