import { useState, useEffect } from "react";
import { Question } from "../types";
import Answer from "./Answer";
import Answers_module from './Answers.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
}

function Answers(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {setShowAnswer(false)}, [props.question]);

    const onPress = (index: number) => {
        setShowAnswer(true)
        props.onSubmit(props.question.correctAnswerIndex === index)
    }

    return <div className={Answers_module.choices}>
        {props.question.choices.map((choice, index) => {
            let color = ""

            if (showAnswer && props.question.correctAnswerIndex === index) color = "green";
            else if (showAnswer) color = "red";

            return (
                <Answer
                    text={choice}
                    onPress={() => onPress(index)}
                    color={color}
                    disabled={showAnswer}
                    key={index}
                />
            );
        })}
    </div>
}

export default Answers;