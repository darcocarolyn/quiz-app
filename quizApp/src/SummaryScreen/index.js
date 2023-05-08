import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
} from 'react-native';
import { data } from '../QuestionsScreen/index.js'


function SummaryScreen({ route }) {
  const { answers } = route.params;

  let score = 0;

 const results = data.map((question, index) => {
  const isCorrect = question.correct !== null && question.correct !== undefined && question.correct.length !== undefined ?
  question.correct.every(correctChoiceIndex => answers[index] !== null && answers[index] !== undefined && answers[index].length !== undefined && answers[index].includes(correctChoiceIndex)) :
  question.correct === answers[index];

  if (isCorrect) {
    score++;
  }

  const choices = question.choices.map((choice, choiceIndex) => ({
    text: choice,
    isCorrect: question.correct !== null && question.correct !== undefined && question.correct.length !== undefined ? question.correct.includes(choiceIndex) : question.correct === choiceIndex,
  }));

  return {
    question: question.prompt,
    choices: choices,
userAnswer: answers[index] && answers[index].length > 1 ?
  answers[index].map(choiceIndex => question.choices[choiceIndex]).join(', ') :
  answers[index] !== null && answers[index] !== undefined ? question.choices[answers[index]] : null,
  };
});

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Results:</Text>
      {results.map((result, index) => (
        <View key={index}>
          <Text style={styles.question}>{result.question}</Text>
          {result.choices.map((choice, choiceIndex) => (
            <Text
              key={choiceIndex}
              style={[
                styles.choice,
                choice.isCorrect ? styles.correctChoice : styles.incorrectChoice,
              ]}
            >
              {choice.text}
            </Text>
                      ))}
          <Text>User Answer: {result.userAnswer}</Text>
        </View>
      ))}
      <Text testID='Total' style={styles.score}>Score: {score} out of {data.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  question: {
    textAlign: "center",
    fontWeight: "medium",
    margin: 10
  },
  text: {
    textAlign: 'center',
    alignItems: "center",
  },
  score: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 20
  },
  result: {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold"
  },
  choice: {
    fontSize: 16,
    marginVertical: 5,
  },
  correctChoice: {
    fontWeight: 'bold',
  },
  incorrectChoice: {
    textDecorationLine: 'line-through',
  },
});
export default SummaryScreen; 