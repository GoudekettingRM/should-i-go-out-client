import React from "react";
import { connect } from "react-redux";
import QuestionComponent from "./QuestionComponent";

const Test: React.FC = () => {
  // update the store with answer
  const handleNextQuestion = (answer: string, id: number) => {
    console.log("Heloooooo: answer", answer, id);
  };

  return (
    <div>
      <div>
        <QuestionComponent
          key={1}
          id={1}
          question={"This is the first question"}
          answers={["yes", "no"]}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </div>
  );
};

export default connect()(Test);
