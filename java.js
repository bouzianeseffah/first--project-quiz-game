// quiz questions
const quizData = [
    
        {
            question: 'how many states in usa',
            a: '50',
            b: '52',
            c: '53',
            d: '49',
            correct: 'a',
        },
        {
            question: 'who is the first president of the united states',
            a: 'Richard Henry Lee',
            b: 'abraham lincoln',
            c: 'John Hanson',
            d: 'George Washington',
            correct: 'd'
        },
        {
            question: 'how many stars on the usa flag',
            a: '52',
            b: '51',
            c: '50',
            d: '49',
            correct: 'c'
        },
        {
            question: 'who is the first state in usa',
            a: 'new york',
            b: 'texas',
            c: 'delaware',
            d: 'california',
            answer: 'c'
        },
]
//variables
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl  = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



