import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import AnswerContainer from "./components/Answer/Answer";
import HomePage from "./components/HomePage/HomePage";
import Test from "./components/Test/Test";
import { setAllAnswersActionCreator } from "./store/answer/actions";
import { setAllQuestionsActionCreator } from "./store/questions/actions";
import { messages } from "./translations/allMessages";
import { languageButtonsData } from "./translations/languageButtons";
import { english } from "./translations/letterCodes";
import { Answers } from "./types/answer";
import { Question } from "./types/question";
import ChangeLanguage from "./images/changeLanguage.svg";
import "./App.css";

interface AppProps {}

type Props = AppProps & LinkDispatchProps;

const App: React.FC<Props> = props => {
  const { setAllQuestions, setAllAnswers } = props;
  const [language, setLanguage] = useState(english);
  const [navClass, setNavClass] = useState("");
  const [flagsClass, setFlagsClass] = useState("languageButtons");

  const handleChangeLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    setAllQuestions(messages[language].questions);
    setAllAnswers(messages[language].answers);
  }, [language, setAllAnswers, setAllQuestions]);

  const renderFlagButton = (
    flagImage: string,
    letterCode: string,
    languageFull: string,
    index: number
  ) => {
    return (
      <div
        key={index}
        className="langFlag"
        onClick={() => {
          handleChangeLanguage(letterCode);
          toggleNav();
        }}>
        <img src={flagImage} alt={languageFull} title={languageFull} />
      </div>
    );
  };

  const toggleNav = () => {
    if (flagsClass === "languageButtons") {
      setFlagsClass("languageButtons show");
      setNavClass("show");
    } else {
      setFlagsClass("languageButtons");
      setNavClass("");
    }
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="App">
        <nav className={navClass}>
          <img
            src={ChangeLanguage}
            alt="Change language"
            className="toggleButton"
            onClick={toggleNav}
          />
          <div className="flagContainer">
            <div className={flagsClass}>
              {languageButtonsData.map((lang, i) =>
                renderFlagButton(
                  lang.image,
                  lang.letterCode,
                  lang.languageFull,
                  i
                )
              )}
            </div>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/test" exact component={Test} />
            <Route path="/answer" exact component={AnswerContainer} />
          </Switch>
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
