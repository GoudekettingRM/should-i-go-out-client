import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { setCurrentQuestionActionCreator } from "../../store/questions/actions";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { FormattedMessage } from "react-intl";
import Button from "react-bootstrap/Button";

interface HomePageProps extends RouteComponentProps {}

type Props = HomePageProps & LinkDispatchProps;

const HomePage: React.FC<Props> = props => {
  const startTest = (): void => {
    props.setCurrentQuestion(1);
    props.history.push("/test");
  };

  return (
    <main className="introScreen">
      <div className="bufferTop"></div>
      <h1>
        <FormattedMessage id="app.title" />
      </h1>
      <Button type="button" onClick={startTest}>
        <FormattedMessage id="app.startButton" />
      </Button>
    </main>
  );
};

interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(
    setCurrentQuestionActionCreator,
    dispatch
  )
});

export default connect(null, mapDispatchToProps)(HomePage);
