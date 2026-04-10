import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import { quizData } from "../../data/quizData";

type QuizState = {
  questions: typeof quizData;
  currentQuestion: number;
  score: number;
  completed: boolean;
};

const initialState: QuizState = {
  questions: quizData,
  currentQuestion: 0,
  score: 0,
  completed: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<string>) => {
      const current = state.questions[state.currentQuestion];
      if (current.correctAnswer === action.payload) {
        state.score++;
      }
    },

    nextQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion++;
      } else {
        state.completed = true;
      }
    },

    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.score = 0;
      state.completed = false;
    },
  },
});

export const { answerQuestion, nextQuestion, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;