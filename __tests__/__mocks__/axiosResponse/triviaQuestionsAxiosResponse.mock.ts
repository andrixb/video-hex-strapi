import { TriviaQuestionsResponse } from '../../../src/TriviaApp/infrastructure/repositories/getTriviaQuestions';
import { axiosOKBaseResponseMock } from './axiosBaseResponse.mock';

export const triviaQuestionsAxiosResponseMock = () =>
    axiosOKBaseResponseMock<TriviaQuestionsResponse>({
        responseCode: 0,
        results: [
            {
                category: 'Vehicles',
                type: 'boolean',
                difficulty: 'hard',
                question:
                    'In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'History',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Japan was part of the Allied Powers during World War I.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Unturned originally started as a Roblox game.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'Entertainment: Comics',
                type: 'boolean',
                difficulty: 'hard',
                question: 'In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.',
                correctAnswer: 'False',
                incorrectAnswers: ['True'],
            },
            {
                category: 'Mythology',
                type: 'boolean',
                difficulty: 'hard',
                question:
                    'Rannamaari was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'Science & Nature',
                type: 'boolean',
                difficulty: 'hard',
                question: 'The value of one Calorie is different than the value of one calorie.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'General Knowledge',
                type: 'boolean',
                difficulty: 'hard',
                question:
                    'Stagecoach owned &quot;South West Trains&quot; before losing the rights to FirstGroup and MTR in March of 2017.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'hard',
                question: 'In &quot;Minecraft&quot;, gold tools are faster than diamond tools.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'History',
                type: 'boolean',
                difficulty: 'hard',
                question: 'The man that shot Alexander Hamilton was named Aaron Burr.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
            {
                category: 'Entertainment: Musicals & Theatres',
                type: 'boolean',
                difficulty: 'hard',
                question:
                    'The protagonist&#039;s names in &#039;Who&#039;s Afraid of Virginia Woolf&#039;, George and Martha, were derived from George Washington and his wife.',
                correctAnswer: 'True',
                incorrectAnswers: ['False'],
            },
        ],
    });
