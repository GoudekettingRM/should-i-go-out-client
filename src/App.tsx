import React, { useEffect, useState } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { Switch, Route } from "react-router";
import { IntlProvider } from "react-intl";
import HomePage from "./components/HomePage/HomePage";
import Test from "./components/Test/Test";
import AnswerContainer from "./components/Answer/Answer";
import messages_en from "./translations/en.json";
import messages_nl from "./translations/nl.json";
import messages_es from "./translations/es.json";
import EnglishFlag from "./images/flags/uk.svg";
import DutchFlag from "./images/flags/nl.svg";
import SpanishFlag from "./images/flags/es.svg";
import { connect } from "react-redux";
import { Question } from "./types/question";
import { setAllQuestionsActionCreator } from "./store/questions/actions";
import { setAllAnswersActionCreator } from "./store/answer/actions";
import { Answers } from "./types/answer";
import "./App.css";

const messages: any = {
  en: messages_en,
  nl: messages_nl,
  es: messages_es
};

interface AppProps {}

type Props = AppProps & LinkDispatchProps;

const App: React.FC<Props> = props => {
  const { setAllQuestions, setAllAnswers } = props;
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };
  useEffect(() => {
    setAllQuestions(messages[language].questions);
    setAllAnswers(messages[language].answers);
  }, [language, setAllAnswers, setAllQuestions]);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" exact component={Test} />
          <Route path="/answer" exact component={AnswerContainer} />
        </Switch>
        <div className="languageButtons">
          <div className="langFlag" onClick={() => handleChangeLanguage("nl")}>
            <img src={DutchFlag} alt="Dutch" />
          </div>
          <div className="langFlag" onClick={() => handleChangeLanguage("en")}>
            <img src={EnglishFlag} alt="English" />
          </div>
          <div className="langFlag" onClick={() => handleChangeLanguage("es")}>
            <img src={SpanishFlag} alt="Spanish" />
          </div>
        </div>
      </div>
    </IntlProvider>
  );
};

interface LinkDispatchProps {
  setAllQuestions: (allQuestions: Question[]) => void;
  setAllAnswers: (allAnswers: Answers) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAllQuestions: bindActionCreators(setAllQuestionsActionCreator, dispatch),
  setAllAnswers: bindActionCreators(setAllAnswersActionCreator, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
