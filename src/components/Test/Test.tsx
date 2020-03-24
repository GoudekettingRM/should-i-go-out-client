import React from "react";
import { connect } from "react-redux";
import QuestionComponent from "./QuestionComponent";
import { Question } from "../../types/question";
import { AppState } from "../../store/rootReducer";
import { determineNextQuestion } from "../../helper-files/determineNextQuestion";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentQuestion } from "../../store/questions/actions";

interface TestProps {}

type Props = TestProps & LinkStateProps & LinkDispatchProps;

const Test: React.FC<Props> = props => {
  const { question, answers, questionNumber } = props.currentQuestion;
  const handleNextQuestion = (answer: string, id: number) => {
    console.log("Hello: answer", answer, id);
    const nextQuestionNumber: number = determineNextQuestion(answer, id);
    console.log("Next question number:", nextQuestionNumber);
    if (nextQuestionNumber > 0) {
      props.setCurrentQuestion(nextQuestionNumber);
    } else if (!nextQuestionNumber) {
      console.log("Conclusion can be reached!");
    }
    //logic for determining next question
    //if conclusion, go to /answer
  };

  return (
    <div>
      <div>
        <QuestionComponent
          key={questionNumber}
          id={questionNumber}
          question={question}
          answers={answers}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </div>
  );
};

interface LinkStateProps {
  currentQuestion: Question;
}

interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
}

const mapStateToProps = (state: AppState) => ({
  currentQuestion: state.questions.current
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(setCurrentQuestion, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
