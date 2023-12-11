import QuestionComp from "./components/Question";
import StatBar from "./components/StatBar";
import questions from "./questions.json";
import { Questions } from './types';
import { useState } from "react";
import App_module from './App.module.scss';
import Reset from "./components/Reset";
import Answer_module from './components/Answer.module.scss';
import Classnames from 'classnames';

function App() {
    const allQuestions = questions as Questions

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    };

    const reset = () => {
        setCurrentQuestionIndex(0)
        setCorrectAnswers(0)
        setIncorrectAnswers(0)
        setWaitingToAdvance(false)
    };

    if (currentQuestionIndex >= allQuestions.questions.length) return (
        <Reset
            totalQuestions={allQuestions.questions.length}
            correctQuestions={correctAnswers}
            onPress={reset}
        />)

    return (
        <div className={App_module.app}>
            <h1 className={App_module.titulo}>Jogo de Perguntas</h1>
            <StatBar
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIndex]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && <button onClick={advance} className={Classnames(App_module['next-btn'], Answer_module.answer)}>Próxima pergunta...</button>}
        </div>
    );
}

export default App;
