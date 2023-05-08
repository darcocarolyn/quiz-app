# quiz-app

This is a React Native quiz app that accepts a list of questions and answers and renders them to the screen. It consists of two components, Questions and Summary. The Question component displays a series of questions with answer choices to the user and the Summary component calculates the user's score and renders a summary of the quiz results with a calculated score based on whether or not the user answered the questions correctly.


The Questions component uses the useState hook to maintain the state of the selected answers for each question and the index of the current question being displayed. The questions consist of three types of questions: True/False, Multiple Choice, and Multiple Answer and in order to continue to the next question, the user must select an answer to proceed.


The Summary component takes in the data from the Questions component and maps over the data accordingly and returns an object for each question in the quiz. Each object consists of the question, the choices, (the correct answer is bolded), and the user's answers. Finally, the score is calculated, (each question is worth 1 point regardless of question type), and rendered at the bottom of the screen.

