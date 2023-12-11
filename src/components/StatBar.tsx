
import StatBar_module from './StatBar.module.scss'; type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
}

function StatBar(props: Props) {
    return <div className={StatBar_module['stat-container']}>
        <p>Perguntas: {props.currentQuestion}/{props.totalQuestions}</p>
        <p>Corretas: {props.correct}</p>
        <p>Incorretas: {props.incorrect}</p>
    </div>
}

export default StatBar;