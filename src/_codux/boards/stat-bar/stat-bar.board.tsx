import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar currentQuestion={10} totalQuestions={20} correct={10} incorrect={10}/>,
    isSnippet: true,
});
