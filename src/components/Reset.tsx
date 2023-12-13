
import Answer_module from './Answer.module.scss';
import App_module from '../App.module.scss';
import Classnames from 'classnames';
import Reset_module from './Reset.module.scss'; type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
}

function Reset(props: Props) {
    const pontuação = ((props.correctQuestions / props.totalQuestions) * 100).toFixed(2)
    return <div>
        <h1 className={Reset_module['reset-txt']}>Sua porcentagem de acerto: {pontuação}%</h1>
        <button onClick={props.onPress} className={Classnames(Answer_module.answer, App_module['next-btn'], Reset_module['reset-btn'])}>Tentar novamente!</button>
    </div>
}

export default Reset;