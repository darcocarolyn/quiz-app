import React, { useState } from 'react';
import { View, Text, Button, CheckBox } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export const data = [
  {
    prompt: "Which of the following is a wonder of the world?",
    type: "multiple-choice",
    choices: ["Roman Baths", "Stone Hedge", "Big Ben", "Tower Hill"],
    correct: 0
  },
  {
    prompt: "Which two sports use mallets?",
    type: "checkbox",
    choices: ["Croquet", "Golf", "Polo", "Tennis"],
    correct: [0, 2]
  },
  {
    prompt: "Vatican City is the smallest city in the world.",
    type: "true-false",
    choices: ["true", "false"],
    correct: 0
  }
];


function QuestionsScreen({ navigation }) {
  const [selectedIndexes, setSelectedIndexes] = useState(new Array(data.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelect = (index) => {
    const newSelectedIndexes = [...selectedIndexes];
    if (data[currentQuestionIndex].type === "checkbox") {
      newSelectedIndexes[currentQuestionIndex] = newSelectedIndexes[currentQuestionIndex] || [];
      if (newSelectedIndexes[currentQuestionIndex].includes(index)) {
        newSelectedIndexes[currentQuestionIndex].splice(newSelectedIndexes[currentQuestionIndex].indexOf(index), 1);
      } else {
        newSelectedIndexes[currentQuestionIndex].push(index);
      }
    } else {
      newSelectedIndexes[currentQuestionIndex] = index;
    }
    setSelectedIndexes(newSelectedIndexes);
  };

  const handleNextQuestion = () => {
  if (currentQuestionIndex < data.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    navigation.replace('Summary', { answers: selectedIndexes });
  }
};

  const question = data[currentQuestionIndex];
  const choices = question.choices;

  return (
    <View style={styles.container}>
      <Text style={styles.choiceContainer}>{question.prompt}</Text>
      {question.type === "checkbox" ? (
        choices.map((choice, index) => (
          <View key={index} testID="choices" style={styles.checkboxContainer}>
            <Text style={styles.label}>{choice}</Text>
            <CheckBox
              style={styles.checkbox}
              onChange={() => handleSelect(index)}
              value={
                selectedIndexes[currentQuestionIndex] !== null &&
                selectedIndexes[currentQuestionIndex].includes(index)
              }
            />
          </View>
        ))
      ) : (
        <ButtonGroup
          testID="choices"
          buttons={choices}
          onPress={handleSelect}
          selectedIndex={selectedIndexes[currentQuestionIndex]}
        />
      )}
      {selectedIndexes[currentQuestionIndex] !== null && (
        <Button title="Next" onPress={handleNextQuestion} />
      )}
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    alignItems: "center"
  },
  choiceContainer: {
    marginBottom: 20,
    padding: 10
  },
  checkboxContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    marginRight: 5,
  },

 
}
export default QuestionsScreen;