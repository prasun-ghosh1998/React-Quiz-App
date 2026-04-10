import Notification from "../components/Notification";
import { useAppSelector } from "../service/helper/redux";
import Quiz from "./Quiz";
import Result from "./Result";

const MainPage = () => {
    const { completed } = useAppSelector((state) => state.quiz);
    
  return (
    <>
   <Notification />
      {completed ? <Result /> : <Quiz />}
</>
  )
}

export default MainPage