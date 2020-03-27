import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import AnswerContainer from "./components/Answer/Answer";
import HomePage from "./components/HomePage/HomePage";
import { FlagButton } from "./components/Languages/FlagButton";
import ShareButtons from "./components/Sharing/ShareButtons";
import Test from "./components/Test/Test";
import { setAllAnswersActionCreator } from "./store/answer/actions";
import { setAllQuestionsActionCreator } from "./store/questions/actions";
import { messages } from "./translations/allMessages";
import {
  getCurrentLanguageImage,
  languageButtonsData
} from "./translations/languageButtons";
import { Answers } from "./types/answer";
import { Question } from "./types/question";
import { useQuery } from "./helper-files/useQuery";
import "./App.css";

interface AppProps {}

type Props = AppProps & LinkDispatchProps;

const App: React.FC<Props> = props => {
  const { setAllQuestions, setAllAnswers } = props;
  const startingLanguage = useQuery();
  const [language, setLanguage] = useState(startingLanguage);
  const [navClass, setNavClass] = useState("");
  const [flagsClass, setFlagsClass] = useState("languageButtons");

  const handleChangeLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    setAllQuestions(messages[language].questions);
    setAllAnswers(messages[language].answers);
  }, [language, setAllAnswers, setAllQuestions]);

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
            src={getCurrentLanguageImage(language)}
            alt="Change language"
            className={`toggleButton`}
            onClick={toggleNav}
          />
          <div className="flagContainer">
            <div className={flagsClass}>
              {languageButtonsData.map((lang, i) => (
                <FlagButton
                  lang={lang}
                  key={i}
                  handleChangeLanguage={handleChangeLanguage}
                  toggleNav={toggleNav}
                />
              ))}
            </div>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/test" exact component={Test} />
            <Route path="/answer" exact component={AnswerContainer} />
          </Switch>
          <footer className="footer">
            <ShareButtons language={language} />
          </footer>
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
