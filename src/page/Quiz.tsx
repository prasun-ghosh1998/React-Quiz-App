import { Card, CardContent, Typography, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../service/helper/redux";
import { answerQuestion, nextQuestion } from "../store/slice/quiz.slice";
import { addNotification } from "../store/slice/notification.slice";
import ProgressBar from "../components/ProgressBar";

const Quiz = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestion } = useAppSelector(
    (state) => state.quiz
  );

  const question = questions[currentQuestion];

  const handleAnswer = (option: string) => {
    const isCorrect = option === question.correctAnswer;

    dispatch(answerQuestion(option));

    dispatch(
      addNotification({
        message: isCorrect ? "Correct Answer" : "Wrong Answer",
        type: isCorrect ? "success" : "error",
      })
    );

    dispatch(nextQuestion());
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card sx={{ maxWidth: 500, m: "auto", mt: 5 }}>
      <CardContent>
        <ProgressBar value={progress} />

        <Typography sx={{mt:2}}>
          Q{currentQuestion + 1}. {question.question}
        </Typography>

        {question.options.map((opt, i) => (
          <Button
            key={i}
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default Quiz;