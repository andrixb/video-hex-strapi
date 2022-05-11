import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';


export default class TriviaQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[]; 

    constructor(
        category: string,
        type: string,
        difficulty: string,
        question: string,
        correctAnswer: string,
        incorrectAnswers: string[], 
    ) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correctAnswer
        this.incorrectAnswers = incorrectAnswers
    }
}

export type TriviaQuestionConstructor = Properties<TriviaQuestion>;
