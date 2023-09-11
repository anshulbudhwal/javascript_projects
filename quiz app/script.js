const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the father of C language?",
        ans1text: "Steve Jobs",
        ans2text: "James Gosling",
        ans3text: "Dennis Ritchie",
        ans4text: "Rasmus Lerdorf",
        answer: "Dennis Ritchie",
    }, {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    },
    {
        question: "Which of the following is not a valid C variable name?",
        ans1text: "int number;",
        ans2text: "float rate;",
        ans3text: "int variable_count;",
        ans4text: "int $main;",
        answer: "int $main;",

    }
]
const question = document.getElementById("quiz_question");
console.log(question);
console.log(question.textContent);
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentquestion = 0;
let score = 0;

console.log(quiz[currentquestion].question);
console.log(quiz[currentquestion].ans1text);
console.log(quiz[currentquestion].ans2text);
console.log(quiz[currentquestion].ans3text);
console.log(quiz[currentquestion].ans4text);

question.textContent = quiz[currentquestion].question;
option_a.textContent = quiz[currentquestion].ans1text;
option_b.textContent = quiz[currentquestion].ans2text;
option_c.textContent = quiz[currentquestion].ans3text;
option_d.textContent = quiz[currentquestion].ans4text;




submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if (checkedAns === null) {
        alert("please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentquestion].answer) {
            score++;
        }

        currentquestion++;
        if (currentquestion < quiz.length) {
            question.textContent = quiz[currentquestion].question;
            option_a.textContent = quiz[currentquestion].ans1text;
            option_b.textContent = quiz[currentquestion].ans2text;
            option_c.textContent = quiz[currentquestion].ans3text;
            option_d.textContent = quiz[currentquestion].ans4text;
            checkedAns.checked = false;
        }
        else {
            alert("Your score is " + score + "out of" + quiz.length);
            location.reload();
        }
    }
});

