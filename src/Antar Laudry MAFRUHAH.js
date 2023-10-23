import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    if (question) {
      setQuestions([...questions, question]);
      setQuestion('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah Halaman Utama</Text>
      <TextInput
        style={styles.input}
        placeholder="Tulis pertanyaan Anda"
        value={question}
        onChangeText={(text) => setQuestion(text)}
      />
      <Button title="Tambah Pertanyaan" onPress={addQuestion} />
      <FlatList
        data={questions}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Pergi ke Second Screen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  questionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
  },
  questionText: {
    fontSize: 16,
  },
});

export default MainScreen;